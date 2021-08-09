import {StudentConstants} from '../actions/student.action';

export const StudentReducers =(state,action)=>{

        switch(action.type){
            case StudentConstants.IS_LOADING:
                return {
                    ...state,
                    isLoading : true
                }
            case StudentConstants.ADDSTUDENT_SUCCESS:
                return {
                    ...state,
                    students : action.payload,
                    isLoading : false
                }
                
            case StudentConstants.ADDSTUDENT_FAILURE: 
                return {
                    ...state,
                    isLoading: false,
                    error : action.payload
                }
            default :
            return {
                ...state
            }
    }
}