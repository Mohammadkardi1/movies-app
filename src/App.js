import { Container } from "react-bootstrap";
import { NavBar } from "./Components/NavBar";
import { MoviesList } from "./Components/MoviesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./Components/MovieDetails";



function App () {

  // to search on API
  // const search = async (word) => {
  //   if (word === "" ) {
  //   } else {
  //     const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=45ff4c751063c2e9d0806b27508297f5&query=${word}&language=ar`)
  //     setMovies(res.data.results)
  //     setPageCount(res.data.total_pages)
  //   }
  // }

  return (
    <div className="font body-color">
      <NavBar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<MoviesList/>}/>
            {/* id is a variable and it will be assigned later */}
            <Route path="/movie/:id" element={<MovieDetails/>}/>   
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;