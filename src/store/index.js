import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userReducer } from './reducers/userReducers'
import { researchersReducer } from './reducers/researcherReducers'
import { repositoriesReducer } from './reducers/repositoryReducers'

const reducer = combineReducers({
  repositories: repositoriesReducer,
  researchers: researchersReducer,
  user: userReducer
})

const userFromStorage = localStorage.getItem('user-admin')
  ? JSON.parse(localStorage.getItem('user-admin'))
  : null

const initialState = { user: userFromStorage }

const middlewares = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
