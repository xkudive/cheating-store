import React from "react";
import { Link } from "@remix-run/react";

import Navbar from "~/Components/Navbar";
import Footer from "~/Components/Footer";


export default function Subscription() {
    return(
        <>
            <Navbar />
            <div className="hero pricing box">
                <div className="background_shadow">
                    <div className="background_shadow_inner"></div>
                </div>
                <div className="container">
                    <div className="hero_title">
                        All for our lovely customers
                    </div>
                    <div className="hero_subhead">
                        <span>
                            When you’re ready to scale, choose our plan.
                        </span>
                    </div>
                </div>
            </div>
            <div className="pricing_plans box">
                <div className="container">
                    <div className="pricing_card_box">
                    <div className="pricing_card">
                            <div className="plan_type">Gold</div>
                            <div className="plan_price">
                                <span className="plan_price_cost">15$</span>
                                <span className="plan_price_duration">/month</span>
                            </div>
                            <div className="plan_subhead">Best for our customers.</div>
                            <div className="plan_subhead">Save money and enjoy the game.</div>
                            <div className="plan_features">
                                <div className="plan_info">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 7.41992L3 17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992H7C4.79086 3.41992 3 5.21078 3 7.41992Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    <span>Basic <b>5%</b> discount</span>
                                </div>
                                <div className="plan_info">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M7 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H8C9.88562 22 10.8284 22 11.4142 21.4142C12 20.8284 12 19.8856 12 18V17" stroke="#fff" strokeWidth="1.5"></path> <path d="M12 7H11C9.11438 7 8.17157 7 7.58579 7.58579C7 8.17157 7 9.11438 7 11V13C7 14.8856 7 15.8284 7.58579 16.4142C8.17157 17 9.11438 17 11 17H13C14.8856 17 15.8284 17 16.4142 16.4142C17 15.8284 17 14.8856 17 13V12" stroke="#fff" strokeWidth="1.5"></path> <path d="M12 6C12 4.11438 12 3.17157 12.5858 2.58579C13.1716 2 14.1144 2 16 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12H16C14.1144 12 13.1716 12 12.5858 11.4142C12 10.8284 12 9.88562 12 8V6Z" stroke="#fff" strokeWidth="1.5"></path> </g></svg>
                                    <span>100$ or more - <b>10%</b> discount</span>
                                </div>
                            </div>
                            <div className="plan_button">Get started</div>
                        </div>
                        <div className="pricing_card">
                            <div className="plan_type_box">
                                <div className="plan_type">Platinum</div>
                                <div className="plan_popular">Most popular</div>
                            </div>
                            <div className="plan_price">
                                <span className="plan_price_cost">50$</span>
                                <span className="plan_price_duration">/month</span>
                            </div>
                            <div className="plan_subhead">Best for our customers.</div>
                            <div className="plan_subhead">Save money and enjoy the game.</div>
                            <div className="plan_features">
                                <div className="plan_info">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 7.41992L3 17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992H7C4.79086 3.41992 3 5.21078 3 7.41992Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    <span>Basic <b>10%</b> discount</span>
                                </div>
                                <div className="plan_info">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M7 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H8C9.88562 22 10.8284 22 11.4142 21.4142C12 20.8284 12 19.8856 12 18V17" stroke="#fff" strokeWidth="1.5"></path> <path d="M12 7H11C9.11438 7 8.17157 7 7.58579 7.58579C7 8.17157 7 9.11438 7 11V13C7 14.8856 7 15.8284 7.58579 16.4142C8.17157 17 9.11438 17 11 17H13C14.8856 17 15.8284 17 16.4142 16.4142C17 15.8284 17 14.8856 17 13V12" stroke="#fff" strokeWidth="1.5"></path> <path d="M12 6C12 4.11438 12 3.17157 12.5858 2.58579C13.1716 2 14.1144 2 16 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12H16C14.1144 12 13.1716 12 12.5858 11.4142C12 10.8284 12 9.88562 12 8V6Z" stroke="#fff" strokeWidth="1.5"></path> </g></svg>
                                    <span>200$ or more - <b>15%</b> discount</span>
                                </div>
                            </div>
                            <div className="plan_button">Get started</div>
                        </div>
                        <div className="pricing_card">
                            <div className="plan_type">Diamond</div>
                            <div className="plan_price">
                                <span className="plan_price_cost">100$</span>
                                <span className="plan_price_duration">/month</span>
                            </div>
                            <div className="plan_subhead">Best for our customers.</div>
                            <div className="plan_subhead">Save money and enjoy the game.</div>
                            <div className="plan_features">
                                <div className="plan_info">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 7.41992L3 17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992H7C4.79086 3.41992 3 5.21078 3 7.41992Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    <span>Basic <b>15%</b> discount</span>
                                </div>
                                <div className="plan_info">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M7 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H8C9.88562 22 10.8284 22 11.4142 21.4142C12 20.8284 12 19.8856 12 18V17" stroke="#fff" strokeWidth="1.5"></path> <path d="M12 7H11C9.11438 7 8.17157 7 7.58579 7.58579C7 8.17157 7 9.11438 7 11V13C7 14.8856 7 15.8284 7.58579 16.4142C8.17157 17 9.11438 17 11 17H13C14.8856 17 15.8284 17 16.4142 16.4142C17 15.8284 17 14.8856 17 13V12" stroke="#fff" strokeWidth="1.5"></path> <path d="M12 6C12 4.11438 12 3.17157 12.5858 2.58579C13.1716 2 14.1144 2 16 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12H16C14.1144 12 13.1716 12 12.5858 11.4142C12 10.8284 12 9.88562 12 8V6Z" stroke="#fff" strokeWidth="1.5"></path> </g></svg>
                                    <span>300$ or more - <b>20%</b> discount</span>
                                </div>
                            </div>
                            <div className="plan_button">Get started</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}