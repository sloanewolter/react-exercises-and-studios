
import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Clean the bathroom", "Fold a load of laundry", "Mow the lawn", "Vacuum"];
      return (
      <div className= {classes.choresComponent}>
         <h3 className = {classes.choresHeading}>Chores to Complete This Weekend</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ul>
      </div>
      );
   }
}

export default ChoresList;