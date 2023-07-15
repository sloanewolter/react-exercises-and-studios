import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/Ingredients.js';
import RecipePhoto from './components/Photos.js';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
      <RecipePhoto />
     
   <div>
      <RecipeDescription />
      <RecipeIngredients />
   </div>
</div>
</div>

  );
}

export default App;
