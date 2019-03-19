import React from 'react';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';
import edamam from '../apis/edamam';
import accessAPI from '../apis/accessAPI';

class App extends React.Component {
  state = { recipes: [], isLoaded: false };

  componentDidMount() {
    this.onSearchSubmit('soup');
  }

  onSearchSubmit = async (queryTerm) => {
    const res = await edamam.get('/search', {
      params: {
        q: queryTerm,
        app_id: accessAPI.ID,
        app_key: accessAPI.KEY,
      }
    });

    this.setState({ recipes: res.data.hits, isLoaded: true });
  }

  renderList() {
    if (this.state.isLoaded) {
      return <RecipesList recipes={this.state.recipes}/>;
    } else {
      return <div className="ui active centered inline loader"></div>;
    }
  }

  render() {
    return (
      <div className="ui container">
          <SearchBar onFormSubmit={this.onSearchSubmit} />
          {this.renderList()}
      </div>
    );
  }
}

export default App;
