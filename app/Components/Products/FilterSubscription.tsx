import React, { MouseEventHandler } from "react";

interface Category {
    category: string;
    isActive: boolean;
    click: MouseEventHandler;
}

export default function FilterSubscription({category, isActive, click}: Category){

    function checkCategory() {
        if (category === "1") return "1 day"
        else if (category === "3") return "3 days"
        else if (category === "7") return "1 week"
        else if (category === "30") return "1 month"
        else return category;
    }

    return(
        <span onClick={click} className={`filter_subscription_element ${isActive ? "active" : ""}`} category={category}>{checkCategory()}</span>
    )
}