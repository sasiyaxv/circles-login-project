import {
  INCREMENT,
  DECREMENT,
  LOGIN,
  SAGA_LOGIN,
  DASHBOARD_DATA,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS,
} from "../actions/actionTypes";

const initialValuesConfig = {
  loginHeader: null,
  loginSubHeader: null,
  dashBoardHeader: null,
};

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
  isLoading: false,
};

export function setValuesReducer(state = initialValuesConfig, action) {
  switch (action.type) {
    case GET_SETTINGS:
      return {};
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        loginHeader: action.payload.loginHeader,
        loginSubHeader: action.payload.subLoginHeader,
        dashBoardHeader: action.payload.dashBoardHeader,
      };
    default:
      return state;
  }
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
    case SAGA_LOGIN:
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
    case DASHBOARD_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case "DASHBOARD_SUCCESS":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        origin: action.payload.origin,
        isLoading: false,
      };
    default:
      return state;
  }
}
