import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';

class PizzaBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render () {
        return (
            <Auxillary>
                <Pizza ingredients = {this.state.ingredients} />
                <BuildControls />
            </Auxillary>

        );
    }
}

export default PizzaBuilder;
