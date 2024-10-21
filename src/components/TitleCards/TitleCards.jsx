import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";


const TitleCards = ({title,category}) => {

  const [apiData,setApiData]=useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGEzOTIxNDUwNmM5ODBkZDExMTgyY2QwYTEzMWFlMiIsIm5iZiI6MTcyOTA3MjcxNC42NTA3MzIsInN1YiI6IjY3MGY4NzQ3MDE5ZjNiYzViMTFiZGM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_TjZX0KsCqdwmsTL7ehz5bJ5yswT_s5586Ise0r2dM'
    }
  };
  
 

    

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    if (!category) {
      console.log("Category is undefined or invalid, skipping fetch.");
      return; // Skip fetching if category is undefined or invalid
    }
    console.log("Current category:", category);

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then((response) => {
      console.log(`Movies fetched for category: ${category}`, response.results);
      setApiData(response.results);
      console.log("API Data Results:", response.results);  // Log specific results
    })
    // .then(response =>setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
   
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
