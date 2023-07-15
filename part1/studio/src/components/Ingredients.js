import React from 'react';
import styles from './Ingredients.module.css'; 

export default function RecipeIngredients () {
    let ingredients = ["semi sweet chocolate chips", "sweetened condensed milk", "vanilla extract"];
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li> 
        </ul>
     </div>
    )
}