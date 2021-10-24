import { GET_JOBS } from "../Types/Types";
export const getJobsReducers = (state={}, action)=>{

    switch (action.type){
        case GET_JOBS :
        return{
            
            jobs: action.payload,

        }
            
        
        default : 
        return{
            state
        }
    }

}