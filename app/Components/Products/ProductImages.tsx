import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface imagesArray {
    array: (string)[]
}

export default function ProductImages({array}: imagesArray) {
    let imagesRef = React.useRef(null)

    return(
        <div className="product_card_images_wrapper" ref={imagesRef}>
            <motion.div 
                className="product_card_images_wrapper_container"
                dragConstraints={imagesRef}
                whileDrag={{cursor: "grabbing"}}
                drag="x"
            >
                {
                    array.map((e,i) => <div className="product_card_image" key={"image"+i}><img src={e} draggable="false"></img></div>)
                }
            </motion.div>
        </div>
    )
}