import React from "react";
import { Link } from "@remix-run/react";

import logo from "../images/logo_small.webp"
import logo_text from "../images/logo_text.png"

export default function Footer() {
    console.log()
    return(
        <div className="footer box">
            <div className="container">
                <div className="footer_top">
                    <div className="footer_left">
                        <Link to="/" className="footer_logo">
                            <img src={logo} alt="" />
                            <img src={logo_text} alt="" />
                        </Link>
                        {/* <p>
                            In any game with any cheat, you can get banned. Try to play as carefully as possible!
                        </p> */}
                    </div>
                    <div className="footer_right">
                        <ul>
                            <li className="footer_right_title">Links</li>
                            <li><Link to="#products">Marketplace</Link></li>
                            <li><Link to="/">Disputes archive</Link></li>
                            <li><Link to="https://discord.com/invite/RgVdCZfhnS">Discord</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <span>2023 © Cheating.Store - Copying and distribution of materials is prohibited.</span>
                    <span>Created by @xkudive</span>
                </div>
            </div>
        </div>
    )
}