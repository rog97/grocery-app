import React from 'react';

const RecipesList = props => {
  console.log(props.recipes[0].recipe.label);
  return (
    <div>
      Recipes
    </div>
  );
}

export default RecipesList;
