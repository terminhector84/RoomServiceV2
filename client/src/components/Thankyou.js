import React from 'react';
import Footer from './Footer'

class Thankyou extends React.Component{

    state={purchasedItems:[]}

    componentWillUpdate(){
        console.log(this.state.purchasedItems)
    }

    async componentDidMount(){
        try{
            const payload = await fetch("/getPurchases");
            const data = await payload.json();
            this.setState({purchasedItems:data.data[0].data})
        }catch(e){
            console.log(e, "is messing things up")
        }
    }
    render(){
        return(
            <div className="check-out">
            <div className="thankyou-container"><p className="thank-you">Thank you!</p></div>
            <div className="purchase-info">
            <p className="order-summary">Order Summary</p> 
             <p><span className="purchased-name">Items:</span><span className="purchased-qty">Qty</span></p>
                {
                    this.state.purchasedItems.map((purchased)=>(
                        <div key={purchased._id}>
                        {  
                            (!purchased.total)? 
                            <p>
                                <span className="purchased-name">{purchased.item_name}</span>
                                <span className="purchased-qty">{purchased.qty}</span>
                                <span className="purchased-price"> ${purchased.price}</span>
                            </p>
                            :<div className="cost">
                            <p>
                                <span className="purchased-name">Tax: </span>
                                <span className="purchased-qty"></span>
                                <span className="purchased-price"> ${(purchased.total * 0.055).toFixed(2)}</span>
                            </p>
                            <p>
                                <span className="purchased-total">Order Total</span>
                                <span className="purchased-qty"></span>
                                <span className="purchased-price-total"> ${purchased.total.toFixed(2)}</span>
                            </p>
                            </div>
                        }
                        </div>
                    ))
                }
                 </div>
                <Footer />
            </div>  
        )
    }
}
export default Thankyou;