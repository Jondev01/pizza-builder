import React from 'react';
import classes from './Pizza.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <PizzaIngredient key={ingKey+i} type={ingKey} />
            });
        });
    return (
        <div className = {classes.Pizza}>
            <PizzaIngredient type="bread-top" />
            {transformedIngredients}
            <PizzaIngredient type="bread-bottom" />
        </div>
    );
}

export default pizza;