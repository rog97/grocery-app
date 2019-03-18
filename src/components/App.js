import React from 'react';
import SearchBar from './SearchBar';
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
    console.log(this.state.recipes[7].recipe);
    console.log(this.state.recipes[7].recipe.label);
    console.log(this.state.recipes[7].recipe.image);
    console.log(this.state.recipes[7].recipe.calories);
    console.log(this.state.recipes[7].recipe.totalTime);
    console.log(this.state.recipes[7].recipe.ingredients);
  }

  render() {
    return (
      <div className="ui container">
          <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
