import {
  FETCH_REPOSITORY_FAIL,
  FETCH_REPOSITORY_REQUEST,
  FETCH_REPOSITORY_SUCCESS
} from '../constants/repositoryConstants'

export const repositoryListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_REPOSITORY_REQUEST:
      return { loading: true }
    case FETCH_REPOSITORY_SUCCESS:
      return { loading: false, repositories: action.payload }
    case FETCH_REPOSITORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
