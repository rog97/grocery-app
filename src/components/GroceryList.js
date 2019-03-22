import React from 'react';
import Ingredient from './Ingredient';

const GroceryList = props => {
  const renderList = props.groceryItems.map((item, index) => {
    return <Ingredient key={index} item={item} onSelectIngredient={props.onSelectIngredient}/>;
  });

  return (
    <div className="ui text container">
      <h3>Groceries I need to buy</h3>
      <div className="ui middle aligned divided list">
        {renderList}
      </div>
    </div>
  );
}

export default GroceryList;
