
import { httpClient } from "../../utilities/httpClient";
import { toast } from "react-toastify";

export const StudentConstants = {
    
    IS_LOADING: "IS_LOADING",
    ADDSTUDENT_SUCCESS: "ADDSTUDENT_SUCCESS",
    GETONESTUDENT_SUCCESS: "GETONESTUDENT_SUCCESS",
    ADDSTUDENT_FAILURE: "ADDSTUDENT_FAILURE",
    GETONESTUDENT_FAILURE: "GETONESTUDENT_FAILURE",
    EDIT_STUDENT_SUCCESS : "EDIT_STUDENT_SUCCESS",
    EDIT_STUDENT_FAILURE : "EDIT_STUDENT_FAILURE",
    RESPONSE_STATUS : "RESPONSE_STATUS"
}

export const isLoading = () => ({
    type: StudentConstants.IS_LOADING
})

export const isSuccess =(data)=>({
    type: StudentConstants.RESPONSE_STATUS,
    payload : data
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

export const editStudentsuccess =(data)=>({
    type : StudentConstants.EDIT_STUDENT_SUCCESS,
    payload : data
})

export const editStudentfailure =(error)=>({
    type : StudentConstants.EDIT_STUDENT_FAILURE,
    payload : error
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

export const EditStudent=(data,id,history)=>dispatch=>{
    
    dispatch(isLoading());
    httpClient.POST(`student/editStudent/${id}`,data,true)
        .then((response)=>{
            dispatch(editStudentsuccess(response.data.student))
            history.push('/studentList');
        })
        .catch((error)=>{
            console.log("error",error)
        })
}


export const GetOneStudent=(id,history)=>dispatch=>{
    dispatch(isLoading());
    httpClient.GET(`/student/studentInfo/${id}`,true,null)
        .then((response)=>{
            console.log(response);
            dispatch(getOneStudentsSuccess(response.data.student))
            // history.push(`/editStudent/${id}`)
        })
        .catch((error)=>{
            dispatch(getOneStudentsFailure(error.data))
        })
}

export const AddAttendance=(data)=>dispatch=>{
    dispatch(isLoading());
    httpClient.POST('/student/attendance',data,true)
        .then((response)=>{
            // toast.dismiss(toastLoading);
            dispatch(isSuccess(true));
            toast.success("Attendance Submitted successfully");
            console.log(response);
        })
        .catch((error)=>{
            dispatch(isSuccess(false))
            toast.error(error);

        })
}

export const clearStudentList=()=>dispatch=>{
    dispatch(isLoading());
    dispatch(isSuccess(true));
}