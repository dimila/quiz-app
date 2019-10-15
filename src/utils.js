function getTime(time) {
    const n = new Date(time)
    const h = n.getHours()
    const m = n.getMinutes()
    return `${h}:${m}`
}

function convertCurrency(curr, val) {
    if (curr == "RUB") return val + " ₽"
    if (curr == "USD") return "$ " + val
    if (curr == "EUR") return val + " €uro"
}

export {
    getTime,
    convertCurrency
}