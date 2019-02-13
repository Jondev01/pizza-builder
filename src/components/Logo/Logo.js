import React from 'react';
import pizzaLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={pizzaLogo} />
    </div>
);

export default logo;