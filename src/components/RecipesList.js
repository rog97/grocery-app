import React from 'react';
import RecipeCard from './RecipeCard';

const RecipesList = props => {

  const renderList = props.recipes.map((recipe, index) => {
    return <RecipeCard key={index} recipe={recipe.recipe} />;
  });

  return (
    <div className="ui relaxed divided list">
      {renderList}
    </div>
  );
}

export default RecipesList;
