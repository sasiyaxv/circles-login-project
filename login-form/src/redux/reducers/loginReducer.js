import {
  INCREMENT,
  DECREMENT,
  LOGIN,
  SAGALOGIN,
  DASHBOARDDATA,
} from "../actions/actionTypes";

const initialState = {
  total: 0,
  name: "Total",
};

const initialUser = {
  userName: null,
  passWord: null,
};

const sagaUser = {
  userName: null,
  passWord: null,
};

const dashboardData = {
  name: null,
  origin: null,
  email: null,
};

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

    default:
      return state;
  }
}

export function loginReducer(state = initialUser, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userName: action.payload.userName,
        passWord: action.payload.passWord,
      };
    default:
      return state;
  }
}

export function sagaLoginReducer(state = sagaUser, action) {
  switch (action.type) {
    case SAGALOGIN:
      return {
        ...state,
        userName: action.payload.userName,
        passWord: action.payload.passWord,
      };
    case "LOGIN_RESPONSE":
      return {
        ...state,
        loginResponse: action.payload,
      };
    default:
      return state;
  }
}

export function getDashboard(state = dashboardData, action) {
  switch (action.type) {
    case DASHBOARDDATA:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        origin: action.payload.origin,
      };
    default:
      return state;
  }
}
