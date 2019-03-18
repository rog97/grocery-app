import React from 'react';

const RecipeCard = (props) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{props.recipe.label}</div>
      </div>
    </div>
  );
}

export default RecipeCard;
