import { httpClient } from "../../utilities/httpClient"

export const AuthConstants = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    IS_LOADING: "IS_LOADING"
}

export const isLoading = () => ({
    type: AuthConstants.IS_LOADING
})

export const loginSucess = (data) => ({
    type: AuthConstants.LOGIN_SUCCESS,
    paylaod: data
})
export const loginfailed = (err) => ({
    type: AuthConstants.LOGIN_FAILURE,
    paylaod: err
})

export const LoginAction = (data) => dispatch => {
    dispatch(isLoading());
    httpClient.POST('/login', data, false, null)
        .then((response) => {
            console.log("inside action")

            dispatch(loginSucess(data))
            console.log("data");
        })
        .catch((err) => {
            dispatch(loginfailed(err))
            console.log(err);
        })
}

