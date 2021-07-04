import {combineReducers} from 'redux'
import { AuthReducers } from './auth.reducers'

export const combinedReducers = combineReducers({
    users: AuthReducers 
})