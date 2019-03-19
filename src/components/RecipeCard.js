import React from 'react';

const RecipeCard = (props) => {
  return (
    <div className="item">

      <div className="ui items">
        <div className="content">
          <h2 className="ui header">
            <img class="ui image" src={props.recipe.image} />
            <div class="content">
              <h3>{props.recipe.label}</h3>
            </div>
          </h2>

          <div className="ui list">
          <div className="ui vertical animated button teal right floated" tabIndex="0">
            <div className="hidden content">Add</div>
            <div className="visible content">
              <i className="shop icon"></i>
            </div>
          </div>

            <div className="item">
              <h5 className="ui header">
                <i className="clock icon small"></i>
                <div className="content">
                  {props.recipe.totalTime === 0 ? `30-40` : props.recipe.totalTime} min
                </div>
              </h5>
            </div>

            <div className="item">
              <h5 className="ui header">
                <i className="fire icon"></i>
                <div className="content">
                  {parseInt(props.recipe.calories)} calories
                </div>
              </h5>
            </div>
          </div><br/>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
