
import "./styling.css";
import recipedata from "./recipe.json";


function AuthorInfo() {
    const authorName = recipedata.map((data) => {
      return (
        <div key = {data.name}>
          {data.author}
        </div>
      )
    });
    const authorImage = recipedata.map((data) => {
      return (
        <div key = {data.name}>
        <img src = {data.authorImage} alt = {data.author} className = "authorImage"></img>
        </div>
      )
    });
    const website = recipedata.map((data) => {
      return (
        <div key = {data.name}>
          <a>{data.website}</a>
        </div>
      )
    });
    return (
      <div>
        {authorName}
        {authorImage}
        {website}
      </div>
    )
    
   
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 