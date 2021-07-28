
const defaultState = {
    currentUser:{}
}


const userNewReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return state;
        case 'DECREMENT':
            return state;

        default:
            return state;
    }
}

export default userNewReducer