const AuthConstants ={
    LOGIN_SUCCESS : "LOGIN_SUCCESS",
    LOGIN_FAILURE : "LOGIN_FAILURE",
    IS_LOADING : "IS_LOADING"
}

export const isLoading =()=>({
    type: AuthConstants.IS_LOADING
})

export const loginSucess=(data)=>({
    type: AuthConstants.LOGIN_SUCCESS,
    payload: data
})

export const loginfailed=(err)=>({
    type: AuthConstants.LOGIN_FAILURE,
    payload: err
})

