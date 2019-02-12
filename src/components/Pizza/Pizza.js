import React from 'react';
import classes from './Pizza.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <PizzaIngredient key={ingKey+i} type={ingKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className = {classes.Pizza}>
            <PizzaIngredient type="bread-top" />
            {transformedIngredients}
            <PizzaIngredient type="bread-bottom" />
        </div>
    );
}

export default pizza;