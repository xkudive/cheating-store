import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import modal_close from "../images/modal_close.svg"

import logo from "../images/logo.webp";

export default function Navbar() {

    let [burgerOpen, setBurgerOpen] = React.useState(false)

    const linkStagger = {
        initial: {
            opacity: 0,
            x: -32,
            transition: {
                duration: 0.5,
                ease: [0.65,0.05,0.36,1]
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration:  0.5,
                ease: [0.65,0.05,0.36,1]
            }
        },
    }
    const parentStagger = {
        initial: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
                staggerDirection: 1
            }
        },
    }

    function closeNavbar() {
        setTimeout(() => {
            document.body.setAttribute("overflow", "visible")
        }, 1300)
        setBurgerOpen(false)
    }

    return(
        <div className="navbar box">
            <div className="container">
                <Link to="/" className="navbar_logo"><img src={logo} alt="" /></Link>
                <ul className="navbar_ul">
                    <Link to="#products">
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
                <div className="nav_mobile">
                    <div className="authorization">
                        <Link to="/"><div className="login">Sign in</div></Link>
                    </div>
                    <div className="burger_btn" onClick={() => {
                        document.body.setAttribute("overflow", "hidden")
                        setBurgerOpen(true)
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <AnimatePresence initial={false}>
                    {burgerOpen &&
                        <motion.div className="mobile_navbar"
                            initial={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", transition: {duration: 0.8, ease: [0.27,0.94,0.48,1.00]} }}
                            animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: {duration: 0.8, ease: [0.27,0.94,0.48,1.00]} }}
                            exit={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", transition: {duration: 0.8, delay: 0.5, ease: [0.27,0.94,0.48,1.00]} }}
                        >
                            <motion.div className="mobile_navbar_top_menu"
                                initial={{y: "-30px", opacity: 0}}
                                animate={{y: 0, opacity: 1, transition: {duration: 0.8, delay: 0.3, ease: [0.65,0.05,0.36,1]} }}
                                exit={{y: "-30px",opacity: 0, transition: {duration: 0.5, delay: 0.3, ease: [0.65,0.05,0.36,1]} }}
                            >
                                <Link to="/" className="navbar_logo"><img src={logo} alt="" /></Link>
                                <img className="mobile_navbar_close" src={modal_close} alt="" onClick={() => closeNavbar()} />
                            </motion.div>
                            <motion.ul 
                                className="mobile_navbar_ul"
                                variants={parentStagger}
                                initial="initial"
                                animate="open"
                                exit="initial"
                            >
                                <Link to="#products">
                                    <motion.li
                                        variants={linkStagger}
                                        onClick={() => closeNavbar()}
                                    >
                                        Marketplace
                                    </motion.li>
                                </Link>
                                <Link to="/">
                                    <motion.li
                                        variants={linkStagger}
                                        onClick={() => closeNavbar()}
                                    >
                                        Disputes
                                    </motion.li>
                                </Link>
                                <a href="https://discord.com/invite/RgVdCZfhnS" target="_blank" rel="noreferrer">
                                    <motion.li
                                        variants={linkStagger}
                                        onClick={() => closeNavbar()}
                                    >
                                        Discord
                                    </motion.li>
                                </a>
                                <Link to="/">
                                    <motion.li
                                        variants={linkStagger}
                                        onClick={() => closeNavbar()}
                                    >
                                        FAQ
                                    </motion.li>
                                </Link>
                            </motion.ul>
                        </motion.div>
                    }
                </AnimatePresence>
        </div>
    )
}
