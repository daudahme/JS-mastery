import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import Moviecard from './Moviecard';

//522d3a02
function App() {
  fetch('https://dummyjson.com/quotes?limit=100&skip=4')
.then(res => res.json())
.then(console.log());

  const [movies,setMovies] = useState([]);
  const [Searchterm,setSearchterm] = useState('');


  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=522d3a02";

  // const movie={
    
  //     "Title": "UFC 18: Road to the Heavyweight Title",
  //     "Year": "1999",
  //     "imdbID": "tt0483513",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BZjI2N2UyMDctOTYwZi00ZjYwLWFjOTItZjIwN2Q5ZWYwYzY0XkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_SX300.jpg"
  // }
  

  const searchmovie  = async (title)=>{

    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();
     setMovies(data.Search);
     console.log(data)
  }

  
  useEffect(()=>{
    searchmovie('spiderman')

  },[])
  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className="search">
        <input type="text" placeholder='Search for movie' value={Searchterm}
        onChange={(e)=>{setSearchterm(e.target.value)}} />
        <img src={SearchIcon} alt="" onClick={()=>searchmovie(Searchterm)}/>
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
             {movies.map((movie)=>{
              return <Moviecard  movie={movie}/>
             })}
             
         </div>
        ):(
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )
      }

       


      
    </div>

    
  );
}

export default App
