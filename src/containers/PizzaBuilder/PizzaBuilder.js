import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Pizza from '../../components/Pizza/Pizza';

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
                <div>Build Controls</div>
            </Auxillary>

        );
    }
}

export default PizzaBuilder;
