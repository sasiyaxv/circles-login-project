import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  POST_USER_LOGIN_ACTION,
  SAGA_LOGIN_ACTION,
  FETCH_DASHBOARD_DATA_ACTION,
  FETCH_DASHBOARD_DATA_ACTION_SUCCESS,
  GET_SETTINGS_ACTION,
  GET_SETTINGS_ACTION_SUCCESS,
  GET_SETTINGS_ACTION_FAIL,
} from "../actions/actionTypes";

const initialValuesConfig = {
  loginHeader: null,
  loginSubHeader: null,
  dashBoardHeader: null,
  isLoading: false,
  isError: false,
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
    case GET_SETTINGS_ACTION:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SETTINGS_ACTION_SUCCESS:
      return {
        ...state,
        loginHeader: action.payload.loginHeader,
        loginSubHeader: action.payload.subLoginHeader,
        dashBoardHeader: action.payload.dashboardHeader,
        isLoading: false,
      };
    case GET_SETTINGS_ACTION_FAIL:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
}

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_ACTION:
      return {
        ...state,
        total: state.total + action.payload,
      };

    case DECREMENT_ACTION:
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
    case POST_USER_LOGIN_ACTION:
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
    case SAGA_LOGIN_ACTION:
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
    case FETCH_DASHBOARD_DATA_ACTION:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DASHBOARD_DATA_ACTION_SUCCESS:
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
