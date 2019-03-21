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
              render={(props) => <GroceryList {...props} groceryItems={this.state.groceryList} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
