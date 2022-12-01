import React from "react";
import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';
// b8a557f5
const API_URL='https://www.omdbapi.com?apikey=b8a557f5'
const App=()=>{

    const searchMovies = async (title) => {
        const response =await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        console.log(data);
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
                value="Superman"
                onChange={()=>{}}
                />
                <img
                src={searchIcon}
                alt="search"
                onClick={()=>{}}
                />
            </div>
        </div>
    );

}

export default App;