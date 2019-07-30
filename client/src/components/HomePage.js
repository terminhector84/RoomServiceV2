import React from 'react';
import Header from './Header';
import ImgContainerWrapper from './ImgContainerWrapper';
import ServiceCheck from './ServiceCheck'
import Footer from './Footer';
import '../styles/header.css';
import '../styles/imageContainer.css';
import '../styles/menutype.css';
import '../styles/carticon.css'
import '../styles/serviceCheck.css';
import '../styles/listItem.css';
import '../styles/totalvalues.css';
import '../styles/placeorder.css';
import '../styles/thankyou.css'
import '../styles/footer.css';

class HomePage extends React.Component{




  
        render(){
        return(
            <div className="App" >
            <Header />
              <div className="main-container">
                <ImgContainerWrapper 
                data={this.props.data} 
                addItem={this.props.addItem}/>

                <ServiceCheck newCart={this.props.newCart} 
                totalCost={this.props.totalCost}
                addItem={this.props.addItem} 
                removeItem={this.props.removeItem}
                sendCart={this.props.sendCart}
                />
              </div>
              <Footer />     
            </div>
        )
        }
    
}

export default HomePage;