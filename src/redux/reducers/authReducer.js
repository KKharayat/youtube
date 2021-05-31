import {
  LOAD_PROFILE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
} from "../actiontype";

const INITIAL_STATE = {
  accessToken: sessionStorage.getItem("ytc-accesstoken")
    ? sessionStorage.getItem("ytc-accesstoken")
    : null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, accessToken: action.payload, loading: false };
    case LOGIN_FAIL:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: action.payload,
      };
    case LOAD_PROFILE:
      return { ...state, user: action.payload };
    case LOG_OUT:
      return { ...state, accessToken: null, user: null };
    default:
      return state;
  }
};
