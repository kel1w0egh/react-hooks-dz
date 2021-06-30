import React, {Component} from 'react';

export default function ButtonColorChange(props) {

    function handlerClick() {
        const colorContainer = document.getElementById("color-container");
        colorContainer.style.backgroundColor = props.color;
    }

    return (
        <div>
            <button onClick={handlerClick}>{props.color}</button>
        </div>
    );
}