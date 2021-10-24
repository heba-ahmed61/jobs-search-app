import axios from "axios";
import { GET_JOBS } from "../Types/Types"

export const fetchJobs =  (query , page ,loading, setLoading) => async (dispatch) =>{
    const{ data} = await axios.get (`https://cors-anywhare.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${query}&location=egypt&start=${page}&hl=en&api_key=e26e03fc25fa69a9ebab1adb26b2bf3fc9ace5e769235ef13eb5ead0122cbe6e`)
    setLoading(false)
    dispatch({
        type:GET_JOBS,
        payload : data.jobs_results,
        
        
        
    })
}