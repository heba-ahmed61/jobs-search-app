import React from "react";
import "./Home.scss";
import JobsList from "../Components/JobsList/JobsList";
import PaginationComponent from "../Components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {fetchJobs} from "../Actions/Actions"

const Home = (props) =>{

    const[search , setSearch]=useState("");
    const [query , setQuery] = useState( " frontend developer ")
    const[page , setPage] = useState(1);
    const [loading , setLoading]= useState(true)


const jobSearch = (e)=>{

    e.preventDefault();
    setQuery(search);

}
const handelPage=(pageNumber)=>{

    setPage(pageNumber);
    window.scroll(0,0)
}

    useEffect(()=>{
    
        props.fetchJobs(query , page , loading ,setLoading );
    
    },[query ,page])

    return(
        <div className="container">
        <div className="form my-5">
                <form onSubmit={jobSearch} >
                    <div className="form-content ">
                    <input type="text" value={search} placeholder="Job Search..." style={{width:"100%"}}
                    onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit" className="search-btn" >Search</button>
                    </div>
                </form>
            </div>

                {loading? <h1>Loading...</h1> : (<>
                    <div className="jobs-list">
                    {props.jobs? props.jobs.map(job => (<JobsList job={job}/>)):(<h1 style={{color:"#444259"}}>No Results Found</h1>)}
                    </div>

                    {props.jobs && (
                    <div className="pagination my-5 ">
                    <PaginationComponent handelPage={handelPage} />
                    </div>)}

                </>)}
    
        
            
    
    </div>
    )
}

export default connect( (state) =>{return{ jobs : state.jobsReducer.jobs}},{fetchJobs}) (Home)