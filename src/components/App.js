import React from 'react';
import Header from './Header';
import Main from './Main';
import GroceryList from './GroceryList';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/groceries" exact component={GroceryList} />
            {/* <Route
              path="/groceries"
              exact={true}
              render={(props) => <GroceryList {...props} groceries={this.state.groceryList}/>}
            /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
