import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={PizzaBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
