import axios from 'axios'
import MySwal from '~/utils/sweetalert.js'
import {
  ERROR_USER,
  LOADING_USER,
  USER_LOGIN,
  USER_LOGOUT
} from '../constants/userConstants'

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: LOADING_USER })

    const { data } = await axios.post('/api/admin/login', { email, password })

    dispatch({ type: USER_LOGIN, payload: data })
  } catch (error) {
    dispatch({
      type: ERROR_USER,
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
  dispatch({ type: USER_LOGOUT })
}
