import {createStore, applyMiddleware} from 'redux'
import {movieReducer} from '../Reducer/movieReducer'
import thunk from "redux-thunk"


export const allReducersStore = createStore(movieReducer,applyMiddleware(thunk) )