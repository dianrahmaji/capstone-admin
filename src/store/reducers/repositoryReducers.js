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

export const respondRepositoryReducer = (state = {}, action) => {
  switch (action.type) {
    case RESPOND_REPOSITORY_REQUEST:
      return { loading: true }
    case RESPOND_REPOSITORY_SUCCESS:
      return { loading: false, repository: action.payload }
    case RESPOND_REPOSITORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const editRepositoryReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_REPOSITORY_REQUEST:
      return { loading: true }
    case EDIT_REPOSITORY_SUCCESS:
      return { loading: false, repository: action.payload }
    case EDIT_REPOSITORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}