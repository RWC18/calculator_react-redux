import * as constTypes from "./constTypes";

function calcFunc(state="", action) {
    switch (action.type) {
        case constTypes.ADD_SYMBOL:
            return state + action.sym;
        case constTypes.CLEAR:
            return "";
        case constTypes.BACK:
            return state.substring(0,state.length - 1);
        case constTypes.EQUALE:
            return eval(state) + "";
        default:
            return state
    }
}

export default calcFunc;