import { StudentConstants } from '../actions/student.action';

export const StudentReducers = (state, action) => {

    switch (action.type) {
        case StudentConstants.IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case StudentConstants.ADDSTUDENT_SUCCESS:
            return {
                ...state,
                students: action.payload,
                isLoading: false
            }

        case StudentConstants.EDIT_STUDENT_SUCCESS:
            return {
                ...state,
                student: action.payload,
                isLoading: false
            }
        case StudentConstants.EDIT_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case StudentConstants.ADDSTUDENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case StudentConstants.GETONESTUDENT_SUCCESS:
            return {
                ...state,  
                student: action.payload,
                isLoading: false
            }
        case StudentConstants.RESPONSE_STATUS:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                isSuccess : action.payload
            }
        case StudentConstants.GETONESTUDENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}