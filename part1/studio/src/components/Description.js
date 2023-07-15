import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor () {
    let authorLink = "https://www.lifeloveandsugar.com/quick-and-easy-chocolate-fudge/";
    let authorPhoto = "https://www.lifeloveandsugar.com/wp-content/uploads/2022/10/LLS-headshot-300s.jpg";
    let authorName = "Lindsay";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Life, Love, and Sugar</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
               <h1>3 Ingredient Chocolate Fudge Recipe</h1>
               <p>This recipe, from the blog "Life, Love, and Sugar", tells you how to make fudge with just three simple ingredients you may already have in your pantry!</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    };
}

export default RecipeDescription;