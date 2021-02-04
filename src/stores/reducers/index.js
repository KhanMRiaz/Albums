import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import albumReducer from './album.reducer'
import photoReducer from './photo.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  albumReducer,
  photoReducer
})

export default reducers
