import React from 'react';
import Auxillary from '../../../hoc/Auxillary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( ingKey => (
        <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>));
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious pizza with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxillary>
    )
};

export default orderSummary;