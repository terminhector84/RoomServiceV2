import React from 'react';

const MenuType = (props) =>{
    return(
        <div id={props.menuType} className="menu-type">
            <p>{props.menuType}</p>
        </div>
    )
}


export default MenuType;