import React, { MouseEventHandler } from "react";

interface Category {
    category: string;
    isActive: boolean;
    click: MouseEventHandler;
}

export default function ActiveCategory({category, isActive, click}: Category){
    return(
        <span onClick={click} className={`category ${isActive ? "active" : ""}`} category={category}>{category}</span>
    )
}