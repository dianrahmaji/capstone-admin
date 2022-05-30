import axios from 'axios'
import MySwal from '~/utils/sweetalert.js'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../constants/userConstants'

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const { data } = await axios.post('/api/admin/login', { email, password })

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('user-admin', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message
    })
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('user-admin')
  dispatch({ type: USER_LOGOUT })
}
