import { AuthConstants } from "../actions/auth.action"

export const AuthReducers = (state,action)=>{
    console.log("insdie  auth reducers",state);

    switch(action.type){
        case AuthConstants.IS_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case AuthConstants.LOGIN_SUCCESS:
            return{
                ...state,
                user : action.payload,
                isLoading: false
            }
        case AuthConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

