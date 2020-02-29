import React from 'react';
import './recipe.css';





const Recipe = ({ title, calories, image, ingredients }) => {




    return (

        <div className="recipe" >
            <h1>{title}</h1>
            <ol> <strong>Ingredients:</strong>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p> <strong>Calories:</strong> <br></br>
                {calories}</p>
            <img src={image} alt="" className="image" />
        </div>

    );
}

export default Recipe;