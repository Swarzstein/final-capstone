import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE, CURRENT_USER, SESSION_FAILURE } from "../actionTypes"


const initialState = {
  user: {},
  error: null
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case CURRENT_USER:
      return {
        ...state,
        user: action.payload
      }
    case SESSION_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default sessionReducer;