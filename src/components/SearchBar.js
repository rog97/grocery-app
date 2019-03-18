import React from 'react';

class SearchBar extends React.Component {
  state = { queryTerm: '' };

  onInputChange = (event) => {
    this.setState({ queryTerm: event.target.value });
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search a recipe</label>
            <input
              type="text"
              placeholder="I'm in the mood for..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
