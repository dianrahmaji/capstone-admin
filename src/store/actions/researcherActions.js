import axios from 'axios'
import MySwal from '~/utils/sweetalert'

import {
  APPROVE_RESEARCHER,
  DELETE_RESEARCHER,
  EDIT_RESEARCHER,
  ERROR_RESEARCHER,
  FETCH_RESEARCHER,
  LOADING_RESEARCHER
} from '../constants/researcherConstants'

export const fetchResearchers = () => async dispatch => {
  try {
    dispatch({ type: LOADING_RESEARCHER })

    const { data } = await axios.get('/api/user')

    dispatch({ type: FETCH_RESEARCHER, payload: data })
  } catch (error) {
    dispatch({
      type: ERROR_RESEARCHER,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const editResearcher = payload => async dispatch => {
  try {
    await axios.put(`/api/users/${payload._id}`, payload)

    dispatch({ type: EDIT_RESEARCHER, payload })
  } catch (error) {
    dispatch({
      type: ERROR_RESEARCHER,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const approveResearcher = id => async dispatch => {
  try {
    await axios.put(`/api/users/${id}/approve`)

    dispatch({ type: APPROVE_RESEARCHER, payload: id })
    MySwal.fire({
      icon: 'success',
      title: 'Success',
      text: 'User Approved'
    })
  } catch (error) {
    dispatch({
      type: ERROR_RESEARCHER,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const deleteResearcher = id => async dispatch => {
  try {
    await axios.delete(`/api/users/${id}`)

    dispatch({ type: DELETE_RESEARCHER, payload: id })
    MySwal.fire({
      success: 'success',
      title: 'Success',
      text: 'User deleted successfully'
    })
  } catch (error) {
    dispatch({
      type: ERROR_RESEARCHER,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
