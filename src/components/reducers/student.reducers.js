import {StudentConstants} from '../actions/student.action';

export const StudentReducers =(state,action)=>{
    console.log("insdie reducers",state);
    console.log("insdie action",action.payload);
        switch(action.type){
            case StudentConstants.IS_LOADING:
                return {
                    ...state,
                    isLoading : true
                }
            case StudentConstants.ADDSTUDENT_SUCCESS:
                console.log("helloooo>>>",action.payload)
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