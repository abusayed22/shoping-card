import { INCREMENT } from "./actionTypes"

export const qty_increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

export const qty_decrement = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}