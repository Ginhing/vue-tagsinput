export const KEY_CODE = {
    LEFT: 37,
    RIGHT: 39,
    BACKSPACE: 8
}

//inner event name parser
export function E(str, ...vals) {
    return `_vti_${str[0]}`
}