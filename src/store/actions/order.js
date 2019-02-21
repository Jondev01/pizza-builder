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

export const purchasePizza = (orderData, token) => {
    return dispatch => {
        dispatch(purchasePizzaStart());
        axios.post('/orders.json?auth=' + token, orderData)
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

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
        axios.get('/orders.json' + queryParams)
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));

        })
        .catch(error => {
            dispatch(fetchOrdersFail(error));
        });
    }
};