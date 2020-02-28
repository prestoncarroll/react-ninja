import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
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