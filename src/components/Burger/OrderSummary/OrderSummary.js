import React from 'react';

import Aux from '../../../hoc/Aux';


const orderSummary = (props) => {
    const ingredientesSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return <li key={igKey} >
                        <span 
                            style={{textTransform: 'capitalize'}} >{igKey}
                        </span>: {props.ingredients[igKey]} 
                    </li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicios burger with the following ingredientes:</p>
            <ul>
                {ingredientesSummary}
            </ul>
            <p>Continue Checkout ?</p>
        </Aux>
    );
};

export default orderSummary;