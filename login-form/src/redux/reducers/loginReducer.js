import { INCREMENT, DECREMENT,LOGIN } from "../actions/actionTypes";

const initialState = {
  total: 0,
  name: "Total",
};

const initialUser={
  userName:null,
  passWord:null
}

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
    
      return {
        ...state,
        total: state.total + action.payload,
      };

    case DECREMENT:
     
      return {
        ...state,
        total: state.total - action.payload,
      };

    default :
        return state;
  }
}

export  function loginReducer(state = initialUser,action){

  switch(action.type){
    case LOGIN:
      return{

        ...state,
        userName : action.payload.userName,
        passWord:action.payload.passWord

      }
      default:
        return state;
  }



}