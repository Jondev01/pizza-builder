import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Pizza from '../../components/Pizza/Pizza';

class PizzaBuilder extends Component {
    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
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
