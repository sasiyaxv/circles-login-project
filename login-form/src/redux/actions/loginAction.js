import {INCREMENT, DECREMENT,LOGIN} from "./actionTypes"

export function incrementBy(payload){
    return {type: INCREMENT,payload }
}


export function decrementBy(payload){
    return {type: DECREMENT,payload }
}

export function login(userName,passWord){
    return{type:LOGIN,payload:{
        userName,passWord
    }}
}