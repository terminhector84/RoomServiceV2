import React from 'react';


class ListItem extends React.Component{
    render(){
        const {_id, url, item_name, qty, totalCost} = this.props.item;
        return(
            <div  key={_id} className="list-container">
                <div className="list-img-container">
                <img src={url} alt={url} width="150" height="112" />
                </div>
                <div className="item-properties-container">
                <p className="item-properties">
                    <span className="item-name">{item_name}</span>
                </p>
                <p className="item-properties">
                    <span className="item-addbtn"><button onClick={this.props.addItem.bind(this, _id)}>+</button></span>
                    <span className="item-qty">{qty}</span>
                    <span className="item-removebtn"><button onClick={this.props.removeItem.bind(this, _id)}>-</button></span>
                    <span className="item-price">${totalCost}</span>
                </p>
                </div>
            </div>
        )
    }
}

export default ListItem;