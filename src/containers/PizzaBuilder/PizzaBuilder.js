import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxillary from '../../hoc/Auxillary/Auxillary';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import  withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

class PizzaBuilder extends Component {
    state = {
        purchasing: false,
    };

    componentDidMount () {
        this.props.onInitIngredients();
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map( ingKey => ingredients[ingKey])
            .reduce( (acc, el) => acc+el, 0);
        return sum > 0;
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let pizza = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;

        if(this.props.ings){
            pizza = (
                <Auxillary>
                    <Pizza ingredients={this.props.ings} />
                    <BuildControls 
                            ingredientAdded={this.props.onIngredientAdded} 
                            ingredientRemoved={this.props.onIngredientRemoved} 
                            disabled={disabledInfo} 
                            price={this.props.price} 
                            purchaseable={this.updatePurchaseState(this.props.ings)} 
                            ordered={this.purchaseHandler} />
                </Auxillary>
            );
            orderSummary = <OrderSummary 
                ingredients={this.props.ings} 
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}
                />;
        }
        if(this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Auxillary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    {orderSummary}
                </Modal>
                {pizza}
            </Auxillary>

        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.pizzaBuilder.ingredients,
        price: state.pizzaBuilder.totalPrice,
        error: state.order.error
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PizzaBuilder, axios));
