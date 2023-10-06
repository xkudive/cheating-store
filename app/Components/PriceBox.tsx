import React from "react";

export default function PriceBox() {

    const [active, setActive] = React.useState(false);

    return(
        <div className="price_container">
            <div className={`price_box ${active ? "active" : ""}`} onClick={() => setActive(active => !active)}>
                <div className="price_left">
                    <div className="price_radio_indicator">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="price_subscription_time">1 day</div>
                </div>
                <div className="price_cost">
                    <div className="previous_price">$20</div>
                    <div className="current_price">$12</div>
                </div>
            </div>
        </div>
    )
} 