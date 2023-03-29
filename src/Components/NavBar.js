import React, { useState } from 'react'
import logo from '../Images/logo.png'
import { useDispatch } from 'react-redux'
import {searchedMovies} from '../Redux/Action/movieAction'
import {getAllmovie, getPaginationPage} from '../Redux/Action/movieAction'
import {Link} from 'react-router-dom'


export const NavBar = () => {

    const [isInputOpnen, setIsInputOpen] = useState(false)
    const dispatchMovie = useDispatch()

    const searchHandler = (word) => {
        if (word === "" ) {
            dispatchMovie(getAllmovie())
        } else {
            dispatchMovie(searchedMovies(word))
        }
    }
    const ImageClickHandler = () => {
        // console.log("ou click")
        // dispatchMovie(getPaginationPage(1))

    }

    return (
        <div className="navbar-style py-2 mb-4">
            <div className="container">
                <div className="row">
                    <div className='col-6 text-start mb-3 mb-md-0'>
                        <Link to='/'>
                        <img src={logo} alt=""
                            role="button"
                            />

                        </Link>


                    </div>
                    <div className='col-6 d-block d-md-none'>
                        <div className='h-100 d-flex align-items-center justify-content-end'>
                            <i class="fa-solid fa-bars" role="button"
                                onClick={() => setIsInputOpen(!isInputOpnen)}
                            ></i>
                        </div>
                    </div>
                    <div className={`col-12 col-md-6 d-md-flex align-items-center 
                        justify-content-start justify-content-md-end
                        ${isInputOpnen ? "d-block" : "d-none"}`}>
                        <div className='position-relative  search-box'>
                            <input onChange={(e) => searchHandler(e.target.value) } type="text"
                                placeholder='search...'
                                className='px-2 py-1 rounded-5 border-0'/>
                            <i class="fa-solid fa-xl fa-magnifying-glass"
                                role='button'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




