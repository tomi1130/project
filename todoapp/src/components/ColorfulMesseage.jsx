import React from 'react';

const ColorfulMessage = (props) =>{
    const {color,children} = props; 
    console.log(props);
    const contentstyle = {
        color,
        fontsize:'18px',
      }
    return (
        <p style = {contentstyle}>{children}</p>
    );
};

export default ColorfulMessage;