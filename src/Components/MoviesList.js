import React from 'react'
import { CardMovie } from './CardMovie'
import { MoviesPagination } from './MoviesPagination';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import {getAllmovie} from '../Redux/Action/movieAction'


export const MoviesList = ({ currentPage}) => {

    const [movies, setMovies ] = useState([])
    const [pageCount, setPageCount] =useState(0)

    const dispatchMovie = useDispatch()

    // get all movies by axios 
    const dataMovies = useSelector((state)=> state.movies)
    const dataPageCount = useSelector((state) => state.pageCount)

    useEffect(()=> {
    setMovies(dataMovies)
    setPageCount(dataPageCount)
    },[dataMovies, dataPageCount])

    useEffect (() => {
    dispatchMovie(getAllmovie())
    }, [])


    return (
        <div className='row g-2'>
            {movies.length >= 1 ?  (movies.map((item) => {
                return (<CardMovie key={item.id} movie={item} />)
            })) : <h2 className='text-center'>Wait a minute to display movies</h2>}
            <MoviesPagination  currentPage={currentPage} pageCount={pageCount}/>
        </div>
    )
}
