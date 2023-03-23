import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import axios from 'axios'

export const MovieDetails = () => {
    const params = useParams()

    const [movie, setMovie] = useState([])

    const getMovieDetailes = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=45ff4c751063c2e9d0806b27508297f5&language=ar`)
        setMovie(res.data)
        console.log(movie)
    }

    useEffect (()=> {
        getMovieDetailes()
        console.log(movie.homepage)
    }, [])

    return (
        <div className='card-details'>
            <div className="container"> 
                <div className="row">
                    <div className="col-6">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt="" />
                    </div>
                    <div className="col-6">
                        <p>اسم الفيلم: {movie.title}</p>
                        <p>تاريخ الفيلم: {movie.release_date}</p>
                        <p>عدد المقيمين: {movie.vote_count}</p>
                        <p>التقييم: {movie.vote_average}</p>
                    </div>
                    <div className="co-12">
                        <h3>القصة:</h3>
                        <p>قصة الفيلم</p>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="col-12 text-center">
                        <Link to="/">
                            <button className='btn-grey'>
                                عودة للرئيسية
                            </button>
                        </Link>
                        <a href={movie.homepage}>
                        <button className='btn-grey'>
                            مشاهدة الفيلم
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}