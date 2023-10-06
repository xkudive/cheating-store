import React from "react";
import { motion } from "framer-motion";

export interface LayoutProps  { 
    children: React.ReactNode;
    closeAnimation: Function;
    modalOpen: boolean;
 }

export default function Backdrop({children, closeAnimation, modalOpen}: LayoutProps) {
    return(
        <motion.div className={`backdrop ${modalOpen ? "active" : ""}`}
            onClick={() => closeAnimation()}>
                {children}
        </motion.div>
    )
}