import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Pizza from '../../components/Pizza/Pizza';

class PizzaBuilder extends Component {
    render () {
        return (
            <Auxillary>
                <Pizza />
                <div>Build Controls</div>
            </Auxillary>

        );
    }
}

export default PizzaBuilder;
