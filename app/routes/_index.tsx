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


export default function Index() {

    return (
        <>
            <Navbar />
            <Hero_new />
            <Products />
        </>
    );
}
