import React from 'react';
import RecipeCard from './RecipeCard';

const RecipesList = props => {

  const renderList = props.recipes.map((recipe, index) => {
    return <RecipeCard key={index} recipe={recipe.recipe} onSelectItems={props.onSelectItems} />;
  });

  return (
    <div className="ui middle aligned divided list">
      {renderList}
    </div>
  );
}

export default RecipesList;
