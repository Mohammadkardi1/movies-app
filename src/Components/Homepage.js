import React from 'react'
import { NavBar } from './NavBar'
import { MoviesList } from './MoviesList'


export const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <MoviesList/>
            </div>
        </div>
    )
}
