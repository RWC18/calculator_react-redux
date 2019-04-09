import * as constTypes from "./constTypes";

export function addSym(sym) {
    return{
        type: constTypes.ADD_SYMBOL,
        sym
    }
}

export function clear() {
    return{
        type: constTypes.CLEAR
    }
}

export function equale() {
    return{
        type: constTypes.EQUALE,
    }
}

export function back() {
    return{
        type: constTypes.BACK,
    }
}