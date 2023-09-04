import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

import logo from "../images/logo.webp";

export default function Navbar() {
    return(
        <div className="navbar box">
            <div className="container">
                <Link to="/"><img src={logo} alt="" /></Link>
                <ul className="navbar_ul">
                    <Link to="/">
                        <li>Marketplace</li>
                        <li>Marketplace</li>
                    </Link>
                    <Link to="/">
                        <li>Disputes</li>
                        <li>Disputes</li>
                    </Link>
                    <a href="https://discord.com/invite/RgVdCZfhnS" target="_blank" rel="noreferrer">
                        <li>Discord</li>
                        <li>Discord</li>
                    </a>
                    <Link to="/">
                        <li>FAQ</li>
                        <li>FAQ</li>
                    </Link>
                </ul>
                <div className="authorization">
                    <Link to="/"><div className="login">Sign in</div></Link>
                </div>
            </div>
        </div>
    )
}
