import React from "react";
import Pagination from '@material-ui/lab/Pagination';
import './Pagination.scss';
const PaginationComponent = (props ) =>{

    return(
        <Pagination  size = "small" count={10} shape="rounded" onChange={(e)=>props.handelPage(e.target.textContent)} />

    )
}
export default PaginationComponent;