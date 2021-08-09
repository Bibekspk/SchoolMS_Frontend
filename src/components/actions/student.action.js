import { httpClient } from "../../utilities/httpClient";

export const StudentConstants = {
    
    IS_LOADING: "IS_LOADING",
    ADDSTUDENT_SUCCESS: "ADDSTUDENT_SUCCESS",
    ADDSTUDENT_FAILURE: "ADDSTUDENT_FAILURE",
}

export const isLoading = () => ({
    type: StudentConstants.IS_LOADING
})

export const addStudentSuccess =(data)=>({
    type : StudentConstants.ADDSTUDENT_SUCCESS,
    payload : data
})

export const addStudentFailure =(error)=>({
    type: StudentConstants.ADDSTUDENT_FAILURE,
    payload: error
})

export const GetStudent=(params)=>dispatch=>{
    dispatch(isLoading());
    httpClient.GET('/student/students',true,params)
        .then((response)=>{
            dispatch(addStudentSuccess(response.data.students))
        })
        .catch((error)=>{
            console.log("error",error);
            dispatch(addStudentFailure(error.data))
        })
}