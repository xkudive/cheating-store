import type { V2_MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "CheatingStore" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

import Navbar from "../Components/Navbar";
import Hero_new from "../Components/Hero_new";
import Products from "~/Components/Products";

import preloader_logo from "../images/mama.png"

export default function Index() {

    React.useEffect(() => {
        function preloader() {
            document.body.classList.remove("preload")
            setTimeout(() => {
                document.body.setAttribute("overflow", "visible")
            }, 800)
        }
        preloader()
    }, [])

    return (
        <>
            <div className="preloader">
                <img src={preloader_logo} alt=""  />
            </div>
            <Navbar />
            <Hero_new />
            <Products />
        </>
    );
}
