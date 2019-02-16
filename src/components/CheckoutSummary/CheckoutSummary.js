import React from 'react';
import Pizza from '../Pizza/Pizza';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin:'auto'}}>
                <Pizza ingredients={props.ingredients} />
                <Button 
                    btnType="Danger"
                    clicked={props.CheckoutCancelled}>CANCEL</Button>
                <Button 
                btnType="Success"
                clicked={props.CheckoutContinued}>CONTINUE</Button>
            </div>
        </div>
    );
}


export default checkoutSummary;