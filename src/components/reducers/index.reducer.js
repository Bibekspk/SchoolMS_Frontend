import {combineReducers} from 'redux'
import { AuthReducers } from './auth.reducers';
import {StudentReducers} from './student.reducers'

export const combinedReducers = combineReducers({
    users: AuthReducers,
    students: StudentReducers
})