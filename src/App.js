import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <PizzaBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
