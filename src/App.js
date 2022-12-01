import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";
// b8a557f5
const API_URL='https://www.omdbapi.com?apikey=b8a557f5'

const movie = {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"

    }


const App=()=>{

    const [movies,setMovies] = useState('');
    const [searchTerm,setSearchTerm]=useState([]);

    const searchMovies = async (title) => {
        const response =await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('spiderman');
    },[]);


    return (
        <div classname="app">
            <h1> Film Forces</h1>

            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img
                src={searchIcon}
                alt="search"
                onClick={()=>{}}
                />
            </div>

            {
                movies?.length>0
                ?(
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ):(

                    <div className="empty">
                    <h1> No Movies Found</h1>

                </div>
                )
            }

        </div>
    );

}

export default App;