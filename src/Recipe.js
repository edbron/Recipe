import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, health_labels, ingredients}) => {
    return(

        <div className={style.recipe}>
        <br></br>
        <img src={image} alt='' className='img' />
        <h1>{title}</h1>
        <p><b>Calories</b> = {calories}</p>
        <p><b>Health Label</b> = {health_labels}</p>
        <p><b><em>Ingredients</em></b></p>
        <ol>
            {ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
            ))}
        </ol>
        </div>
    );
    }

export default Recipe;

