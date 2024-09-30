import { useState } from "react"
import WeatherSearch from "./WeatherSearch"
import FavoriteCities from "./FavoriteCities";

function App() {

 const[favorites,setFavorites]= useState([]);

  const addFavorite =(city) => {
   if(!favorites.includes(city)){
    setFavorites([...favorites,city]);
    localStorage.setItem('favoritesCities',JSON.stringify([...favorites,city]));
   }
  }
const removeCity = (city) => {
   const savedFavourites = JSON.parse(localStorage.getItem('favoritesCities'));
   const updatedCities= savedFavourites.filter((savedCity) => savedCity !== city);
   setFavorites(updatedCities);
   localStorage.setItem('favoritesCities',JSON.stringify(updatedCities));
}


  
  return (
     <div className="min-h-screen flex-col flex items-center justify-center p-4 ">
      <div className="max-w-md mx-auto p-6 bg-white opacity-70 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-4">Weather dashboard</h1>
         <WeatherSearch addFavorite={addFavorite} />
      </div>
        <FavoriteCities favorites={favorites} removeCity={removeCity} />
     </div>
  )
}

export default App
