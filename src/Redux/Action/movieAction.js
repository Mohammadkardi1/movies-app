import {ALLMOVIES, MovieAPI} from '../Type/moviesType'
import axios from 'axios'


export const getAllmovie = () => {
    // Higher Order Function
    return async (dispatch) => {  
        const res = await axios.get(MovieAPI)
        dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages })
    }
}

export const searchedMovies = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=45ff4c751063c2e9d0806b27508297f5&query=${word}&language=ar`)
        dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages}) 
    }
}

export const getPaginationPage = (pageNumber) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=45ff4c751063c2e9d0806b27508297f5&language=ar&page=${pageNumber}`)
        dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages}) 
    }
}