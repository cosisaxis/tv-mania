import './App.css';
import {useState } from "react";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);

  const searchMovies = () => {
    Axios.get(`https://api.tvmaze.com/search/shows?q=${movieName}`).then((res) => {
      let movies = res.data
      setMovieSearch(movies);
    })
  }
   



  return (
    <div className="App">
      <div>
        <input onChange={(event) => {setMovieName(event.target.value)}} type="text" />
        <button onClick={searchMovies}>Search</button>
      </div>

      <div>
        {movieSearch.map((shows, index) => {
          return(
            <div key={index}> 
              <p>{shows.score}</p>
              <p>{shows.show.name}</p>
            </div>
          )
        })}

      </div>
    
    </div>
  );
}

export default App;
