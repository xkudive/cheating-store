import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import modal_close from "../images/modal_close.svg"

import logo from "../images/logo.webp";
import BackdropNavbar from "./BackdropNavbar";

let Notifications = [
    {
        username: "xkudive",
        message: "has disputed a payment for",
        amount: "80.00",
        date: "Oct 9",
        read: false
    },
    {
        username: "dadaya",
        message: "has disputed a payment for",
        amount: "32.00",
        date: "Oct 7",
        read: false
    },
    {
        username: "Fringillidae",
        message: "has disputed a payment for",
        amount: "21.00",
        date: "Oct 6",
        read: false
    }
]

interface notificationInfo {
    notificationInfo: {
        username: string
        message: string;
        amount: string;
        date: string;
        read: boolean;
    };
}

export function NotificationBox({notificationInfo}: notificationInfo) {
    return(
        <div className="notification_box">
            <div className="notification_content_box">
                <div className="notification_content">
                    <div className={`notification_indicator`}>
                        <div className="dot pulse"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="notification_info">
                        <div className="notification_message">
                            <b>{notificationInfo.username}</b> {notificationInfo.message} <b>${notificationInfo.amount}</b>
                        </div>
                        <div className="dot"></div>
                        <div className="notification_date">{notificationInfo.date}</div>
                    </div>
                </div>
            </div>
            <div className="notification_more">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
        </div>
    )
}

export default function Navbar() {
    let [notificationArray, setNotificationArray] = React.useState(Notifications)
    let [burgerOpen, setBurgerOpen] = React.useState(false);
    let [isAuthorized, setIsAuthorized] = React.useState(true);
    let [notificationCount, setNotificationCount] = React.useState(3);
    let [notificationDropdown, setNotificationDropdown] = React.useState(false);

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

    function openDropdown() {
        setNotificationDropdown(true)
        document.body.setAttribute("overflow", "hidden")
    }
    function closeDropdown() {
        setNotificationDropdown(false)
        document.body.setAttribute("overflow", "visible")
    }

    return(
        <div className="navbar box">
            <div className="container">
                <Link to="/" className="navbar_logo"><img src={logo} alt="" /></Link>
                <ul className="navbar_ul">
                    <Link to="/games">
                        <li>Marketplace</li>
                        <li>Marketplace</li>
                    </Link>
                    <Link to="/subscriptions">
                        <li>Subscriptions</li>
                        <li>Subscriptions</li>
                    </Link>
                    <Link to="/disputes">
                        <li>Disputes</li>
                        <li>Disputes</li>
                    </Link>
                    <a href="https://discord.com/invite/RgVdCZfhnS" target="_blank" rel="noreferrer">
                        <li>Discord</li>
                        <li>Discord</li>
                    </a>
                    <Link to="/faq">
                        <li>FAQ</li>
                        <li>FAQ</li>
                    </Link>
                </ul>
                <div className="nav_mobile">
                    <div className="authorization">
                        {isAuthorized ? 
                            <div className="account_info">
                                <div className="navbar_icons navbar_notifications" onClick={() => {
                                    openDropdown()
                                    setNotificationCount(0)
                                }}>
                                    <AnimatePresence>
                                        {notificationCount ? 
                                            <motion.div className="notification_count"
                                                initial={{scale: 0}}
                                                animate={{scale: 1}}
                                                exit={{scale: 0}}
                                                key={notificationCount}
                                            >{notificationCount}</motion.div>
                                            :
                                            <></>
                                        }
                                    </AnimatePresence>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="#fff" strokeWidth="1.5"></path> <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                                </div>
                                <Link to="/profile/balance"><span className="navbar_icons navbar_balance"><span>M0$</span></span></Link>
                                <Link to="/profile/store"><span className="navbar_icons navbar_username"><span>Fringillidae</span></span></Link>
                            </div> :
                            <Link to="/login"><div className="login">Sign in</div></Link>
                        }
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
                {notificationDropdown && 
                    <BackdropNavbar closeAnimation={closeDropdown}>  
                        <div className="container">
                            <div className="notification_menu" onClick={(e) => e.stopPropagation()}>
                                <div className="notification_top">
                                    <div className="notification_label">Notifications</div>
                                    <div className="notification_close" onClick={() => closeDropdown()}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#fff"></path> </g></svg>
                                    </div>
                                </div>
                                <div className="notifications">
                                    {notificationArray.length ? notificationArray.map((e,i) => <NotificationBox notificationInfo={e} />) : <div className="notifications_empty">No Older Notifications</div>}
                                </div>
                                <div className="notification_buttons">
                                    <div className="notification_button notifications_read">Read All</div>
                                    <div className="notification_button notifications_clear">Clear All</div>
                                </div>
                            </div>
                        </div>
                    </BackdropNavbar>
                }
            </AnimatePresence>
            <AnimatePresence initial={false}>
                    {burgerOpen &&
                        <motion.div className="mobile_navbar"
                            initial={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
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
                                <Link to="/games">
                                    <motion.li
                                        variants={linkStagger}
                                        onClick={() => closeNavbar()}
                                    >
                                        Marketplace
                                    </motion.li>
                                </Link>
                                <Link to="/subscriptions">
                                    <motion.li
                                        variants={linkStagger}
                                        onClick={() => closeNavbar()}
                                    >
                                        Subscriptions
                                    </motion.li>
                                </Link>
                                <Link to="/disputes">
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
                                <Link to="/faq">
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
