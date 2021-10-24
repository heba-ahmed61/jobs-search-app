import React, { useState } from "react";
import './JobsList.scss';



const JobsList = (props)=>{

    const [click , setClick] = useState(false)
    const handelClick =()=>{
        setClick(!click);
        console.log(click)
    }
    return(
        <div className="job-list my-5 " key={props.job.job_id}>
            <div className="job-information ">
                <div className="job-title-job-image ">
                <div className="job-title mt-3"> 
                <h5>{props.job.title}</h5> 
                </div>
            <div className="job-image mt-3 " >
            {props.job.thumbnail? (<img style ={{  width:"60px" ,height: "60px" , objectFit:"contain"}}  src={props.job.thumbnail}/>):(<img style ={{  width:"60px" ,height: "60px" , objectFit:"contain"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ycU5bXgAg5HX2jZduC39vQ0p9sCH8VwWLg&usqp=CAU"/>)}
    </div>
            </div>
            
                
                <p>{props.job.company_name} <span> - </span><span>{props.job.location.includes("Anywhere")? "Egypt": props.job.location }</span></p>
                <h6>{props.job.via}</h6>
                <p>{`posted at : ${props.job.detected_extensions.posted_at}`}</p>
                <span className="job-time ">{props.job.detected_extensions.schedule_type}</span>
                <div className="link mt-4 mb-3 " onClick={handelClick}>
                <button  className="details-btn">View More About Job</button>
                <div className={click? "description-details" : " description-details-hide"}>
                <p className="mt-3 ">{props.job.description}</p>
                </div>

                </div>

            

            </div>
            
        </div>
    )
}
export default JobsList;