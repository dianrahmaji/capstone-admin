import axios from 'axios'
import MySwal from '~/utils/sweetalert'

import {
  RESEARCHER_LIST_FAIL,
  RESEARCHER_LIST_REQUEST,
  RESEARCHER_LIST_SUCCESS
} from '../constants/researcherConstants'

export const researcherList = () => async dispatch => {
  try {
    dispatch({ type: RESEARCHER_LIST_REQUEST })

    const { data } = await axios.get('/api/users')

    dispatch({ type: RESEARCHER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: RESEARCHER_LIST_FAIL,
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
