import axios from 'axios'
import {
  EDIT_REPOSITORY_FAIL,
  EDIT_REPOSITORY_REQUEST,
  EDIT_REPOSITORY_SUCCESS,
  FETCH_REPOSITORY_FAIL,
  FETCH_REPOSITORY_REQUEST,
  FETCH_REPOSITORY_SUCCESS,
  RESPOND_REPOSITORY_FAIL,
  RESPOND_REPOSITORY_REQUEST,
  RESPOND_REPOSITORY_SUCCESS
} from '../constants/repositoryConstants'

export const repositoryList = () => async dispatch => {
  try {
    dispatch({ type: FETCH_REPOSITORY_REQUEST })

    const { data } = await axios.get('/api/team')

    dispatch({ type: FETCH_REPOSITORY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FETCH_REPOSITORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const respondRepository =
  ({ id, approve }) =>
  async dispatch => {
    try {
      dispatch({ type: RESPOND_REPOSITORY_REQUEST })

      const { data } = axios.put(`/api/team/${id}/approve?value=${approve}`)

      dispatch({ type: RESPOND_REPOSITORY_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: RESPOND_REPOSITORY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

export const editRepository = payload => async dispatch => {
  try {
    dispatch({ type: EDIT_REPOSITORY_REQUEST })

    const { data } = await axios.put(`/api/team/${payload._id}`, payload)

    dispatch({ type: EDIT_REPOSITORY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: EDIT_REPOSITORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
