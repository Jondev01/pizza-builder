import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                loading: true,
                purchased: false
            };

        case actionTypes.PURCHASE_PIZZA_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.PURCHASE_PIZZA_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.concat({...action.orderData, id: action.orderId}),
                purchased: true
            };
        case actionTypes.PURCHASE_PIZZA_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            };
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;