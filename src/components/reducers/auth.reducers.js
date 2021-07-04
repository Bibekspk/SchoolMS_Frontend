export const AuthReducers = (state,action)=>{
    switch(action){
        case 'login':
            return{
                ...state,
                isLoading: false
            }

        default:
            return{
                ...state
            }
    }
}