import React from 'react';
import Header from './Header';
import Main from './Main';
import GroceryList from './GroceryList';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {
  state = { groceryList: [] };

  getIngredients = (ingredients) => {
    if (this.state.groceryList) {
      const existingList = this.state.groceryList;
      this.setState({ groceryList: [...existingList, ...ingredients] });
    } else {
      this.setState({ groceryList: ingredients });
    }
    console.log(this.state.groceryList);
  }

  removeIngredient = (ingredient) => {
    // Filter out any chosen ingredient
    const reducedIngredients = this.state.groceryList.filter( item => {
      return item !== ingredient;
    });
    
    this.setState({ groceryList: reducedIngredients });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route
              path="/"
              exact
              render={(props) => <Main {...props} onSelectItems={this.getIngredients} />}
            />
            <Route
              path="/groceries"
              exact
              render={(props) => <GroceryList {...props}
                groceryItems={this.state.groceryList}
                onSelectIngredient={this.removeIngredient}
               />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
