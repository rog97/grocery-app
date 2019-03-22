import React from 'react';

class Ingredient extends React.Component {

  onButtonClick = async () => {
    const ingredient = await this.props.item;
    // calling callback from parent component
    this.props.onSelectIngredient(ingredient);
  }

  render() {
    return (
      <div className="item">
        <div className="right floated content">
          <button
            onClick={this.onButtonClick}
            className="ui mini vertical button teal right floated"
            tabIndex="0">Got it!</button>
        </div>
        <div className="content">
          {this.props.item}
        </div>
      </div>
    );
  }
}

export default Ingredient;
