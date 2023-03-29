import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch } from "react-redux";
import {getPaginationPage} from '../Redux/Action/movieAction'

export const MoviesPagination = ({currentPage, pageCount}) => {

    const dispatchMovie = useDispatch()
    const handlePageClick =async (data) => {
        dispatchMovie(getPaginationPage(data.selected+1))
    }
    
    return (
        <ReactPaginate
        breakLabel="..."  // you can here put any icon or other thing to appare instead of Ellipsis 
        nextLabel="next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName ={"page-item"}
        pageLinkClassName ={"page-link"}
        previousClassName ={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName = {"page-item"}
        breakLinkClassName = {"page-link"}
        activeClassName ={"active"}
    />
    )
}
