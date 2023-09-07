import React from "react";
import { motion } from "framer-motion"

interface backdropModal {
    closeAnimation: () => void;
    children: React.ReactNode;
}

export default function Backdrop({closeAnimation, children}: backdropModal) {

    return(
        <motion.div className="image_modal_backdrop"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            style={{zIndex: 1000}}
            onClick={(e) => {
                e.stopPropagation();
                closeAnimation();
                document.body.setAttribute("overflow", "visible")
            }}>
                {children}
        </motion.div>
    );
}