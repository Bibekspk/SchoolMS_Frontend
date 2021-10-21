import { httpClient } from "../../utilities/httpClient"

export const AuthConstants = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    IS_LOADING: "IS_LOADING",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILURE: "REGISTER_FAILURE",
}

export const isLoading = () => ({
    type: AuthConstants.IS_LOADING
})

export const loginSucess = (data) => ({
    type: AuthConstants.LOGIN_SUCCESS,
    payload: data
})
export const loginfailed = (err) => ({
    type: AuthConstants.LOGIN_FAILURE,
    payload: err
})
export const registersuccess = (data) => ({
    type: AuthConstants.REGISTER_SUCCESS,
    payload: data
})
export const registerfailed = (err) => ({
    type: AuthConstants.REGISTER_FAILURE,
    payload: err
})

export const LoginAction = (data,props) => dispatch => {
    dispatch(isLoading);
    httpClient.POST('/login', data, false, null)
        .then((response) => {
            localStorage.setItem("user",JSON.stringify(response.data.user))
            localStorage.setItem("token",response.data.token)
            dispatch(loginSucess(response.data.user));
            props.history.push('/home');

        })
        .catch((err) => {
            dispatch(loginfailed(err))
            console.log(err);
        })
}
export const RegisterAction = (data) => dispatch => {
    dispatch(isLoading);
    httpClient.POST('/register',data)
                .then((response)=>{
                    dispatch(registersuccess(response.data))
                })
                .catch(err=>{
                    dispatch(registerfailed(err))
                })
                
}

