import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userReducer } from './reducers/userReducers'
import { researchersReducer } from './reducers/researcherReducers'
import { repositoriesReducer } from './reducers/repositoryReducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const reducer = combineReducers({
  repositories: repositoriesReducer,
  researchers: researchersReducer,
  user: userReducer
})

const middlewares = [thunk]

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { store, persistor }
