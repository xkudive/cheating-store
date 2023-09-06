import React, { MouseEventHandler } from "react";

interface Category {
    category: string;
    isActive: boolean;
    click: MouseEventHandler;
}

export default function FilterRating({category, isActive, click}: Category){

    function checkCategory() {
        if (category === "Any") return "Any"
        else if (category === "1") return "> 1 star"
        else if (category === "2") return "> 2 stars"
        else if (category === "3") return "> 3 stars"
        else if (category === "4") return "> 4 stars"
        else if (category === "5") return "5 stars"
    }

    return(
        <span onClick={click} className={`filter_subscription_element ${isActive ? "active" : ""}`} category={category}>{checkCategory()}</span>
    )
}