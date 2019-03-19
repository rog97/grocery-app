import React from 'react';

class RecipeCard extends React.Component {

  render() {
    return (
      <div className="item">

        <div className="ui items">
          <div className="content">
            <h2 className="ui header">
              <img className="ui image" alt="" src={this.props.recipe.image} />
              <div className="content">
                <h3><a href={this.props.recipe.url}>{this.props.recipe.label}</a></h3>
              </div>
            </h2>

            <div className="ui list">
            <button className="ui vertical animated button teal right floated" tabIndex="0">
              <div className="hidden content">Add</div>
              <div className="visible content">
                <i className="shop icon"></i>
              </div>
            </button>

              <div className="item">
                <h5 className="ui header">
                  <i className="clock icon small"></i>
                  <div className="content">
                    {this.props.recipe.totalTime === 0 ? `30-40` : this.props.recipe.totalTime} min
                  </div>
                </h5>
              </div>

              <div className="item">
                <h5 className="ui header">
                  <i className="fire icon"></i>
                  <div className="content">
                    {parseInt(this.props.recipe.calories)} calories
                  </div>
                </h5>
              </div>
            </div><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
