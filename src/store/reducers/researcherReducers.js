import {
  RESEARCHER_LIST_FAIL,
  RESEARCHER_LIST_REQUEST,
  RESEARCHER_LIST_SUCCESS
} from '../constants/researcherConstants'

export const researcherListReducer = (state = { researchers: [] }, action) => {
  switch (action.type) {
    case RESEARCHER_LIST_REQUEST:
      return { loading: true, researchers: [] }
    case RESEARCHER_LIST_SUCCESS:
      return { loading: false, researchers: action.payload }
    case RESEARCHER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
