import React from 'react';
import classes from './Pizza.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = (props) => {
    return (
        <div className = {classes.Pizza}>
            <PizzaIngredient type="bread-top" />
            <PizzaIngredient type="cheese" />
            <PizzaIngredient type="meat" />
            <PizzaIngredient type="bread-bottom" />
        </div>
    );
}

export default pizza;