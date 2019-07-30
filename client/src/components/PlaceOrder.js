import React from 'react';
import {Link} from 'react-router-dom';
class PlaceOrder extends React.Component{
    render(){
        return(
            <div className="place-order">
                <p className="place-order-container">
                    <Link className="Link" to="/Thankyou" onClick={this.props.sendCart} >Place Order</Link>
                </p>
            </div>
        )
    }
}

export default PlaceOrder;