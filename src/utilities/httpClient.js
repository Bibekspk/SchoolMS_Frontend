import axios from "axios";
import history from '../history';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    timeout: 20000,
    timeoutErrorMessage: "Server timed out"
})

http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.data.msg === "Token is invalid or expired") {
        localStorage.clear();
        logout();
    }
});

const logout = () => {
    history.push('/login');
    history.go(0); //it loads specific url from history list
    // if 0 is placed then it reloads current url which is '/login'
}

const getHeaders = (isSecured) => {
    let options = {
        'Content-Type': 'application/json'
    }
    if (isSecured) {
        options['Authorization'] = localStorage.getItem('token')
    }
    return options
}

const GET = (url, isSecured = false, params = {}) => {
    return http.get(url, {
        headers: getHeaders(isSecured),
        params
    })
}
const POST = (url, data, isSecured = false, params = {}) => {
    return http.post(
        url, data, {
        headers: getHeaders(isSecured)
    }
    )
}
const PUT = (url, data, isSecured = false, params = {}) => {
    return http.put(url, data, {
        headers: getHeaders(isSecured)
    })
}
const DELETE = (url, isSecured = false, params = {}) => {
    return http.put(url, {
        headers: getHeaders(isSecured)
    })
}

export const httpClient = {
    GET, POST, PUT, DELETE
}