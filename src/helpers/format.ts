export function formatDateTime(date: string): string {
    const d = new Date(date)
    return d.toLocaleString()
}

export function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}