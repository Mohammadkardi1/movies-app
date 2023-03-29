import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import axios from 'axios'
import { NavBar } from './NavBar'


export const MovieDetails = () => {
    const params = useParams()
    const [movie, setMovie] = useState([])

    const getMovieDetailes = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=45ff4c751063c2e9d0806b27508297f5&language=en`)
        setMovie(res.data)
        console.log(movie)
    }

    useEffect (()=> {
        getMovieDetailes()
        console.log(movie.homepage)
    }, [])

    return (
        <div className='pb-5'>
            <NavBar/>
                <div className='card-details'>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-4">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                                ClassName=""
                                                alt="" />
                            </div>
                            <div className="col-8">
                                <div>
                                    <h5 ClassName="mb-5">{movie.title}</h5>
                                    <p ClassName="">Release date: {movie.release_date}</p>
                                    <p ClassName="">Vote Count: {movie.vote_count}</p>
                                    <p ClassName="">Vote Average: {movie.vote_average}</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h3>Story:</h3>
                            <p>Overview</p>
                            <p>{movie.overview}</p>
                        </div>
                        <div className="text-center">
                            <Link to="/">
                                <button className='btn-grey'>
                                    Go homepage
                                </button>
                            </Link>
                            <a href={movie.homepage}>
                            <button className='btn-grey'>
                                Watch movie
                            </button>
                            </a>
                        </div>
                        </div>

            </div>
        </div>
    )
}