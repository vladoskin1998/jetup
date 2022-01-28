export const formDate = (d: Date | string) => {
    const date = new Date(d)
    return date.toLocaleString('ua', {
        day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    })
}