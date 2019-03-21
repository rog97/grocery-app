import React from 'react';

const GroceryList = props => {
  const renderList = props.groceryItems.map((item, index) => {
    return item;
  });

  return (
    <div>
      {renderList}
    </div>
  );
}

export default GroceryList;
