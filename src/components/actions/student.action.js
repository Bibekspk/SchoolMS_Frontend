import { httpClient } from "../../utilities/httpClient";

export const StudentConstants = {
    
    IS_LOADING: "IS_LOADING",
    ADDSTUDENT_SUCCESS: "ADDSTUDENT_SUCCESS",
    GETONESTUDENT_SUCCESS: "GETONESTUDENT_SUCCESS",
    ADDSTUDENT_FAILURE: "ADDSTUDENT_FAILURE",
    GETONESTUDENT_FAILURE: "GETONESTUDENT_FAILURE",
}

export const isLoading = () => ({
    type: StudentConstants.IS_LOADING
})

export const getStudentsSuccess =(data)=>({
    type : StudentConstants.ADDSTUDENT_SUCCESS,
    payload : data
})

export const getOneStudentsSuccess =(data)=>({
    type : StudentConstants.GETONESTUDENT_SUCCESS,
    payload : data
})

export const getOneStudentsFailure =(data)=>({
    type : StudentConstants.GETONESTUDENT_FAILURE,
    payload : data
})

export const getstudentsFailure =(error)=>({
    type: StudentConstants.ADDSTUDENT_FAILURE,
    payload: error
})

export const GetStudent=(params={})=>dispatch=>{
    dispatch(isLoading());
    httpClient.GET('/student/students',true,params)
        .then((response)=>{
            dispatch(getStudentsSuccess(response.data.students))
        })
        .catch((error)=>{
            console.log("error",error);
            dispatch(getstudentsFailure(error.data))
        })
}

export const GetOneStudent=(id)=>dispatch=>{
    dispatch(isLoading());
    httpClient.GET(`/student/edit/${id}`,true,null)
        .then((response)=>{
            dispatch(getOneStudentsSuccess(response.data.student))
        })
        .catch((error)=>{
            dispatch(getOneStudentsFailure(error.data))
        })
}