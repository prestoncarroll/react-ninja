import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


// grabbing our api key and id
const App = () => {
  const APP_ID = "7dfa7298";
  const APP_KEY = "b7773e5293acb1995ec038439ba83acf";
  //using state to store the recipes and set them
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('steak')

  useEffect(() => {
    getRecipes();

  }, [query]);


  //fetching the search from api grabbing json from it 
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // grabbing hits from the json and putting it on the page
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)

  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  };



  return (
    // setting up search bar and search button
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>

      </form>

      {/*  running through the recipes with .map */}
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />

      )
      )}
    </div>

  );
}

export default App;
