// /store/user.js

import { defineStore } from "pinia";
import router from "@/router";
import { apiWrapper } from "@/helpers";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
    refreshTokenTimeout: null
  }),

  actions: {
    async signUp(username: string, password: string) {
      try {
        const user = await apiWrapper.post(`${baseUrl}/users`, { 'username': username, 'password': password }).then((user) => {
          if (user.code == 200) {
            alert("Register success. Please proceed to login.");
            router.push('/login');
          } else {
            console.log(user);
          }
        })
        console.log(user);
      } catch (error) {
        console.log(error);
        return error
      }
    },

    async logIn(username: string | undefined, password: string | undefined) {
      try {
        const res = await apiWrapper.post(`${baseUrl}/auth/login`, { username, password }).then((user) => {
          console.log(user)
          if (user.code == 200) {
            // store user details and jwt in local storage to keep user logged in between page refreshes
            const info = {
              username: username,
              token: user.payload.token,
              expire: user.payload.expire
            }
            
            localStorage.setItem('user', JSON.stringify(info));
            this.user = info
            router.push(this.returnUrl || '/');
            console.log(info);
            
            // start refresh token timer
            this.startRefreshTokenTimer();

            return 'success'
          } else {
            console.log(user.message);
          }
        })
      } catch (error) {
        return error
      }

    },

    async refreshToken() {
      if (!this.user) return;
      const newToken = await apiWrapper.get(`${baseUrl}/auth/refresh_token`, null);
      const newInfo = {
        'username': this.user.username,
        'token': newToken.token,
        'expire': newToken.expire
      }
      localStorage.setItem('user', JSON.stringify(newInfo));
      // this.user.token = newToken.token
      // this.user.expire = newToken.expire
      this.startRefreshTokenTimer();
    },

    startRefreshTokenTimer() {
        if (!this.user) return;

        // parse json object from base64 encoded jwt token
        const jwtBase64 = this.user.token.split('.')[1];
        const jwtToken = JSON.parse(atob(jwtBase64));
      
        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);

        this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
    },    

    stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    },

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        this.stopRefreshTokenTimer();
        router.push('/login');
    }
  },
});