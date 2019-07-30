import React from 'react';

class TotalValues extends React.Component{
    render(){
        return(
            <div className="totalvalues-container">
                <p className="totalvalues-content">
                    <span className="value-text">{this.props.val}</span>
                    <span className="value-price">$ {Number(this.props.totalCost).toFixed(2)}</span>
                </p>
            </div>
        )
    }
}

export default TotalValues;