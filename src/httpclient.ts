import axios from 'axios'

interface Response<T> {
  code: number
  error: string
  payload: T
  status: string
}

class HttpClient {

  public get baseUrl(): string {
    const url = import.meta.env.VITE_API_URL as string
    if (url) return url
    return "https://staging-api-test.insightic.io"
  }

  private _token: string = ''

  public get token(): string {
    if (this._token) return this._token
    const token = localStorage.getItem('token')
    if (token) this.token = token
    return this._token
  }

  public set token(token: string) {
    this._token = token
    localStorage.setItem('token', token)
  }

  public absoluteUrl(url: string): string {
    if (url.startsWith('/')) {
      return this.baseUrl + url
    }
    return url
  }

  private _headers(): { [key: string]: string } {
    const headers: { [key: string]: string } = {}
    if (this._token) {
      headers['Authorization'] = `Bearer ${this._token}`
    }
    return headers
  }

  public async get<T>(url: string, autoRefresh: boolean = true): Promise<Response<T> | null> {
    url = this.absoluteUrl(url)
    try {
      const resp = await axios.get<Response<T>>(url, { headers: this._headers() })
      return resp?.data
    } catch (e: any) {
      const data = e?.response?.data as Response<T>
      if (autoRefresh && data.code == 401) {
        const tokenResp = await this.refreshToken()
        return tokenResp?.code == 200 ? await this.get<T>(url, false) : data
      }
      return data
    }
  }

  public async post<T>(
    url: string,
    data: any = null,
    autoRefresh: boolean = true
  ): Promise<Response<T> | null> {
    url = this.absoluteUrl(url)
    try {
      const resp = await axios.post<Response<T>>(url, data, { headers: this._headers() })
      return resp?.data
    } catch (e: any) {
      console.log(e)

      const data = e?.response?.data as Response<T>
      if (autoRefresh && data.code == 401) {
        const tokenResp = await this.refreshToken()
        return tokenResp?.code == 200 ? await this.post<T>(url, data, false) : data
      }
      return data
    }
  }

  public async put<T>(
    url: string,
    data: any = null,
    autoRefresh: boolean = true
  ): Promise<Response<T> | null> {
    url = this.absoluteUrl(url)
    try {
      const resp = await axios.put<Response<T>>(url, data, { headers: this._headers() })
      return resp?.data
    } catch (e: any) {
      console.log(e)

      const data = e?.response?.data as Response<T>
      if (autoRefresh && data.code == 401) {
        const tokenResp = await this.refreshToken()
        return tokenResp?.code == 200 ? await this.put<T>(url, data, false) : data
      }
      return data
    }
  }

  public async delete<T>(url: string, autoRefresh: boolean = true): Promise<Response<T> | null> {
    url = this.absoluteUrl(url)
    try {
      const resp = await axios.delete<Response<T>>(url, { headers: this._headers() })
      return resp?.data
    } catch (e: any) {
      console.log(e)
      const data = e?.response?.data as Response<T>
      if (autoRefresh && data.code == 401) {
        const tokenResp = await this.refreshToken()
        return tokenResp?.code == 200 ? await this.delete<T>(url, false) : data
      }
      return data
    }
  }

  public isAuthorized(): boolean {
    if (!this.token) return false
    return true
  }

  public async register(
    username: string,
    password: string
  ): Promise<Response<{ Token: string }> | null> {
    const resp = await this.post<{ Token: string }>('/accounts', { username, password }, false)
    if (resp?.code === 200) {
      alert('Registration successful. Please login to continue.')
    }
    return resp
  }

  public async login(
    username: string,
    password: string
  ): Promise<Response<{ Token: string }> | null> {
    const resp = await this.post<{ Token: string }>('/auth/login', { username, password }, false)
    if (resp?.code === 200) {
      resp.payload.Token && (this.token = resp.payload.Token)
    }
    return resp
  }

  public async logout() {
    await this.post<null>('/auth/logout', false)
    this.token = ''
  }

  public async refreshToken(): Promise<Response<{ Token: string }> | null> {
    const resp = await this.get<{ Token: string }>('/auth/refreshToken', false)
    if (resp?.code === 200) {
      resp.payload.Token && (this.token = resp.payload.Token)
    }
    return resp
  }
}

export default new HttpClient()
