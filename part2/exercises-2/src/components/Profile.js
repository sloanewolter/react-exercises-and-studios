import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean => 
   <div key = {ocean.id} className = {`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
   <h1>{ocean.name}</h1>
   <img className="img" src = {ocean.image} alt = {ocean.name}/>
   <h2>3 facts about {ocean.name}</h2>
   <ul>
      <li>{ocean.fact1}</li>
      <li>{ocean.fact2}</li>
      <li>{ocean.fact3}</li>
   </ul>
   <Button />
   </div>
   );

function Profile()
{
   return(
      
         <ul>
            {listItem}
         </ul>
        
     
   );
}

export default Profile;