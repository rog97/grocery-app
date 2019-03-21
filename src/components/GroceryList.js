import React from 'react';
import Ingredient from './Ingredient';

const GroceryList = props => {
  const renderList = props.groceryItems.map((item, index) => {
    return <Ingredient key={index} item={item} />;
  });

  return (
    <div>
      {renderList}
    </div>
  );
}

export default GroceryList;
