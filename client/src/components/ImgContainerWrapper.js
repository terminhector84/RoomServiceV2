import React from 'react';
import MenuType from './MenuType';
import ImgContainer from './ImgContainer';

class ImgContainerWrapper extends React.Component{    
    render(){
        return(
            <div className="image-container-wrapper-wrapper">
                <MenuType menuType={"Breakfast"}/>
                <div className="image-container-wrapper"> 
                    {
                        this.props.data.map((items)=>(
                            (items._id.startsWith("0b"))?
                                <div key={items.url}> 
                                    <ImgContainer data={items}  addItem={this.props.addItem}/>
                                </div>
                            :null
                        ))
                    }
                </div>
                <MenuType menuType={"Lunch"}/>
                <div className="image-container-wrapper">
                    {
                        this.props.data.map((items)=>(
                            (items._id.startsWith("0l"))?
                                <div key={items.url}> 
                                    <ImgContainer data={items}  addItem={this.props.addItem}/>
                                </div>
                            :null
                        ))
                    }
                </div>
                <MenuType menuType={"Dinner"}/>  
                <div className="image-container-wrapper">
                    {
                        this.props.data.map((items)=>(
                            (items._id.startsWith("0d"))?
                                <div key={items.url}> 
                                    <ImgContainer data={items}  addItem={this.props.addItem}/>
                                </div>
                            :null
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default ImgContainerWrapper;