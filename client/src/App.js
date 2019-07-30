import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import FourOhFour from './components/FourOhFour'
import HomePage from './components/HomePage';
import Thankyou from './components/Thankyou';
import './App.css';

class App extends React.Component {

state ={
  data:[],
  cart:[],
  newCart:[],
  totalCost:0,
  submitted:false,
  purchasedItems:[]
}

async componentDidMount(){
  
try{
    let payload = await fetch("/getData")
    let data = await payload.json()
      this.setState({
        data:data.data, 
        cart:data.data,
        newCart:this.state.newcart,
        totalCost:this.state.totalCost
      })
    
  }catch(e){ 
    console.log("What is going on?", e)
  }
  }

componentWillUpdate(){
  console.log("cart", this.state.cart)
}
componentWillUnmount(){
  this.setState({submitted:true, newCart:[], totalCost:0})
    localStorage.clear();
}
  
componentDidUpdate(){ 
  if(this.state.newCart){
    let total = {"total":this.state.totalCost}
    this.state.newCart.push(total);
    let basket = [...this.state.newCart];
    localStorage.setItem("basket", JSON.stringify(basket));
  }
}

sendCart = ()=>{
  let store  = JSON.parse(localStorage.getItem("basket"));

  fetch("/postData",{
    method:"POST",
    mode:"cors",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"},
    body:JSON.stringify(store)
  })
  .then(data => { 
    this.setState({submitted:true, newCart:[], totalCost:0})
    localStorage.clear();
  })
  .catch((e)=> console.log(e))
}


//add item to cart
addItem = (_id) => {
  let itemList = [...this.state.cart];
  itemList.forEach(item => {
    if(item._id === _id){
      item.qty++;
      item.totalCost =parseFloat(item.price * item.qty).toFixed(2)
    }
  });

  let store = itemList.filter((item) => (item.qty > 0));
  let subTotal = 0;
  for(let k = 0; k < store.length; k++){
    subTotal += parseFloat(store[k].totalCost)
  }

  this.setState({      
    data:this.state.data,
    cart:this.state.cart,
    newCart:[...store],
    totalCost:parseFloat(subTotal)
  });
}


//remove item unit from cart
removeItem = (_id)=>{
  let itemList = [...this.state.cart];

  itemList.forEach(item => {
    if(item._id === _id){
      item.qty--;
      item.totalCost =parseFloat(item.price * item.qty).toFixed(2)
    }
  });

  let subTotal = 0;
  for(let k = 0; k < itemList.length; k++){
    subTotal += parseFloat(itemList[k].totalCost)
  }

  this.setState({      
    data:this.state.data,
    cart:this.state.cart,
    newCart:[...itemList],
    totalCost:parseFloat(subTotal)
  });
}

  render(){
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" strict render={() =>
          (<HomePage 
            data={this.state.data}
            newCart={this.state.newCart}
            totalCost={this.state.totalCost}
            addItem={this.addItem}
            removeItem={this.removeItem}
            sendCart={this.sendCart}
          />)
        } />
        <Route exact to="/Thankyou" render={()=>(<Thankyou />)} />
        <Route component={FourOhFour} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
