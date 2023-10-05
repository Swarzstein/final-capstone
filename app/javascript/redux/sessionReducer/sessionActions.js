import axios from "axios"
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, CURRENT_USER } from "../actionTypes"

export const signUp = (name) => {
  return  async dispatch => {
    try {
      // const response = await axios.post('/api/v1/users', { user: {name} });
      const response = await axios.post('api/v1/users', {
        user: { name }
      },{
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content,
        }
      });
      const { user } = response.data;
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: user
      })
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response.data.error
      })
    }
  }
}

export const login = (name) => {
  return async dispatch => {
    try {
      const response = await axios.post('api/v1/users/sign_in', {
        user: { name }
      },{
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content,
        }
      });
      const { user } = response.data;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      })
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.error
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    try {
      await axios.delete('/api/v1/users/sign_out');
      dispatch({
        type: LOGOUT
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const getUser = () => {
  return async dispatch => {
    try {
      const request = await fetch('/api/v1/users');
      const user = await request.json();
      dispatch({
        type: CURRENT_USER,
        payload: user
      })
    } catch (error) {
      console.log(error);
    }
  }
}