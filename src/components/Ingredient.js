import React from 'react';

const Ingredient = props => {
  return (
    <div className="item">
      <div className="right floated content">
        <button className="ui mini vertical button teal right floated" tabIndex="0">Got it!</button>
      </div>
      <div className="content">
        {props.item}
      </div>
    </div>
  );
}

export default Ingredient;
