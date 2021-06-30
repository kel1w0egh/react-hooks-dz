import React from "react";
import ButtonColorChange from "./ButtonColorChange";

export default function ColorChange(props) {
    return (
        <div>
            <ButtonColorChange color={"blue"} />
            <ButtonColorChange color={"red"} />
            <ButtonColorChange color={"green"} />

            <div id={"color-container"} style={{backgroundColor: "tomato", padding: "10px"}}>Текст</div>
        </div>
    );
}