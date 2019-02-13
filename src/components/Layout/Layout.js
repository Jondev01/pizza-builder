import React, {Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( prevState =>  {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render() {
        return (
            <Auxillary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer} />
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Auxillary>
        );
    }
}

export default Layout;