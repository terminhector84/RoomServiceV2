import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



class CartIcon extends React.Component{
    toggleDisplay = () => {
        document.getElementsByClassName("cart-items")[0].classList.toggle("show-items")
    }
    render(){
        return(
            <div className="cart-icon-container">
                <button className="floating" onClick={this.toggleDisplay}>
                    <FontAwesomeIcon icon={faShoppingCart} className="fas" />
                </button>
            </div>
        )
    }
}


export default CartIcon;