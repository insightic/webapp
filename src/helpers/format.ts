export function formatDateTime(date: string): string {
    const d = new Date(date)
    return d.toLocaleString()
}
