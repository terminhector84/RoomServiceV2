import React from 'react';
import CartIcon from "./CartIcon";
import ListItem from './ListItem'
import TotalValues from './TotalValues'
import PlaceOrder from './PlaceOrder';

class ServiceCheck extends React.Component{
    
render(){
        const subtotal = this.props.totalCost;
        const tax = subtotal * 0.054;
        const total = subtotal + tax;
    
    return(
        <div className="service-check">
            < CartIcon />
            <div className="cart-items">
            {
                (this.props.newCart)?
                this.props.newCart.map((item)=>(
                    (item.qty > 0)?
                    <ListItem key={item._id}item ={item} addItem={this.props.addItem} removeItem={this.props.removeItem}/>:null )):null
            } 
            {
                (subtotal !== 0)?
            <React.Fragment>
            <TotalValues 
            val={"Subtotal:"}  totalCost={subtotal}/>
            <TotalValues 
            val={"Tax:"} totalCost={tax}/>
            <TotalValues 
            val={"Total:"} totalCost= {total}/>
            
            <PlaceOrder sendCart={this.props.sendCart}/>
            </React.Fragment>
            :null
            }
            </div>
        </div>
    )
}
}

export default ServiceCheck;