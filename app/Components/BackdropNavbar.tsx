import React from "react";
import { motion } from "framer-motion";

export interface LayoutProps  { 
    children: React.ReactNode;
    closeAnimation: Function;
 }

export default function BackdropNavbar({children, closeAnimation}: LayoutProps) {
    return(
        <motion.div className="backdrop_navbar"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => closeAnimation()}>
                {children}
        </motion.div>
    )
}