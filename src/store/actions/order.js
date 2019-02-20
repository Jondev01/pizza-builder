import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const purchasePizzaSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_PIZZA_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

const purchasePizzaFail = (error) => {
    return {
        type: actionTypes.PURCHASE_PIZZA_FAIL,
        error: error
    };
};

const purchasePizzaStart = (orderData) => {
    return {
        type: actionTypes.PURCHASE_PIZZA_START
    };
};

export const purchasePizza = (orderData) => {
    return dispatch => {
        dispatch(purchasePizzaStart());
        axios.post('/orders.json', orderData)
        .then(response => {
            dispatch(purchasePizzaSuccess(response.data.name, orderData));
        })
        .catch( error => {
            dispatch(purchasePizzaFail(error));
        });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};