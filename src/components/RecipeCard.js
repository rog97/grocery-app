import React from 'react';

const RecipeCard = (props) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{props.recipe.label}</div><br/>
        <p>Calories: {parseInt(props.recipe.calories)}</p>
        <p>Total Time: {props.recipe.totalTime === 0 ? 30 : props.recipe.totalTime} min</p>
      </div>
    </div>
  );
}

export default RecipeCard;
