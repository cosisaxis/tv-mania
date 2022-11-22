import './App.css';
import {useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    Axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`).then((res) => {
      setMovies(res.data)
    })
  }
   
  useEffect(() => {

     console.log(movies);
  }, [movies])


  return (
    <div className="App">
      <div className='search-field'>
        <input className='search-input' onChange={(event) => {setMovie(event.target.value)}} type="text" />
        <button className='search-button' onClick={getMovies}>Search</button>
      </div>

      <div className='container'>
        {movies.map((movie, index) => {
          const {show, score} = movie
          return(
            <div className='results-cards' key={index}> 
              <p className='results-score'>{score}</p>
              <p className='results-name'>{show.name}</p>
              <img className='results-image' height='150px' src={show.image?.medium ? show.image.medium : ""}/>
              {/* <img src={show.image?.original ? show.image.original: ""}/> */}
            </div>
            
          )
        })}

      </div>
    
    </div>
  );
}

export default App;
