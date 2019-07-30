import React from 'react';

class ImgContainer extends React.Component{
wink =() =>{
  document.getElementsByClassName("floating")[0].classList.toggle("floating-wink");
  
}

  render(){
  const {_id, url, item_name, price} = this.props.data;
 
    return(
        <div key={_id} className="image-container">
            <div className="items">
                <img width="320" height="241" src={url} alt={url} />
                <p className="description">{item_name}</p>
                <p className="price">${price}</p>
                <div className="btns-wrapper">
                    <div className="btns order">
                       <button onClick={this.props.addItem.bind(this, _id)}>Order</button>
                    </div>
                </div> 
             </div>
        </div>
    )
  }  
}

export default ImgContainer;