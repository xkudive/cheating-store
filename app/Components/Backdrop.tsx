import React from "react";
import { motion } from "framer-motion";

export interface LayoutProps  { 
    children: React.ReactNode
 }

export default function Backdrop({children}: LayoutProps) {
    return(
        <div className="backdrop">

        </div>
    )
}