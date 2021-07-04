import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combinedReducers} from './components/reducers/index.reducer'

let middleware = [thunk]

const intialStore={
    users:{
        isLoading: false,
        user : {}
    }
}

export const store = createStore(combinedReducers,intialStore,applyMiddleware(...middleware))