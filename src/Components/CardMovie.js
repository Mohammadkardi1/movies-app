import React from 'react'
import {Link} from 'react-router-dom'

export const CardMovie = ({movie}) => {

    return (
        <div className="card-movie col-12 col-md-4 col-lg-3">
            <Link to={`/movie/${movie.id}`}>   {/* عم ابعت بل يو ار ال تبعي ال اي دي */}
                <div className='position-relative'>
                    <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
                    <div className='overlay px-2'>
                        <p>Title : {movie.title}</p>
                        <p>Release date : {movie.release_date}</p>
                        <p>Vote count: {movie.vote_count}</p>
                        <p>Vote average: {movie.vote_average}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
