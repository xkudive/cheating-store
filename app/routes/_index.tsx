import type { V2_MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "CheatingStore" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

import Navbar from "~/Components/Navbar";
import Hero_new from "~/Components/Hero";
import Products from "~/Components/Products";
import Footer from "~/Components/Footer";
import PriceBox from "~/Components/PriceBox";
import Pricing from "~/Components/Pricing";

export default function Index() {

    return (
        <>
            <Navbar />
            <Hero_new />
            <Products />
            <Pricing />
            <PriceBox />
            <Footer />
        </>
    );
}
