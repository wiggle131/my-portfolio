import React from "react";

const ColoredLine = ({color}) =>{
    return(
        <hr
        style={{
        color,
        backgroundColor: color,
        height: 1.5,
        border: 0,
        }}
    />
    );
}
export default ColoredLine;