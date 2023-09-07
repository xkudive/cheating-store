import React from "react";

import arrow from "../images/arrow_link.svg"

export default function Hero_new() {
    return(
        <div className="hero box">
            <div className="background_shadow">
                <div className="background_shadow_inner"></div>
            </div>
            <div className="container">
                <div className="hero_suphead">
                    Escrow based marketplace ✨
                </div>
                <div className="hero_title">
                    Cheating Store - Buy directly<br/> from manufacturers.
                </div>
                <div className="hero_subhead">
                    <span>
                        Meet a new level of accessibility and trust.<br/> Buy cheats the way you like.
                    </span>
                </div>
                <a href="#products" className="hero_button">
                    View Products
                    <img src={arrow} alt="" />
                </a>
            </div>
        </div>
    )
}