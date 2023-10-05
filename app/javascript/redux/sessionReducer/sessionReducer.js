import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, CURRENT_USER } from "../actionTypes"


const initialState = {
  user: {},
  error: null
}

export default function sessionReducer(state = initialState, action) {
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
    case LOGOUT:
      return {
        ...state,
        user: null
      }
    case CURRENT_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
