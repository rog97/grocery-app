import React from 'react';

class SearchBar extends React.Component {
  state = { queryTerm: '' };

  onInputChange = (event) => {
    this.setState({ queryTerm: event.target.value });
  }

  onFormSubmit = (event) => {
    // Prevent page to reload on form submission
    event.preventDefault();

    // Need to pass the query term back up to the App! Using callback to do this
    this.props.onFormSubmit(this.state.queryTerm);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label><h3>Search for a recipe</h3></label>
            <input
              type="text"
              placeholder="I'm in the mood for..."
              value={this.state.queryTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
