import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrwer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <SideDrwer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;