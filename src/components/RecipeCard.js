import React from 'react';

const RecipeCard = (props) => {
  return (
    <div className="item">

      <div className="ui items">
        <div className="content">
          <div className="header">{props.recipe.label}</div>

          <div className="ui list">
          <div className="ui vertical animated button teal right floated" tabIndex="0">
            <div className="hidden content">Add</div>
            <div className="visible content">
              <i className="shop icon"></i>
            </div>
          </div>

            <div className="item">
              <i className="clock icon"></i>
              <div className="content">
                {props.recipe.totalTime === 0 ? `30-40` : props.recipe.totalTime} min
              </div>
            </div>
            <div className="item">
              <i className="fire icon"></i>
              <div className="content">
                {parseInt(props.recipe.calories)} calories
              </div>
            </div>
          </div><br/>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
