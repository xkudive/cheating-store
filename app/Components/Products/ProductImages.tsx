import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import modal_arrow from "../../images/modal_arrow.svg"
import modal_close from "../../images/modal_close.svg"

interface imagesArray {
    array: (string)[];
    imageOpened: () => void;
}

export default function ProductImages({array, imageOpened}: imagesArray) {

    let imagesRef = React.useRef(null);
    let [imagesModalOpen, setImagesModalOpen] = React.useState(false);
    let [clickable, setClickable] = React.useState(true);
    let [imageIndex, setImageIndex] = React.useState("");
    
    function backdropClose() {
        setImagesModalOpen(false)
    }
    function galleryLeftButton() {
        let imageId = parseInt(imageIndex);
        let newImageId = imageId - 1;
        if (newImageId === -1) newImageId = array.length - 1;
        setImageIndex(newImageId + "");
    }
    function galleryRightButton() {
        let imageId = parseInt(imageIndex);
        let newImageId = imageId + 1;
        if (newImageId === array.length) newImageId = 0;
        setImageIndex(newImageId + "");
    }
    function imageGalleryClose() {
        setImagesModalOpen(false)
        imageOpened()
        document.body.setAttribute("overflow", "visible")
    }

    return(
        <>
            <div className="product_card_images_wrapper" ref={imagesRef}>
                <motion.div 
                    className="product_card_images_wrapper_container"
                    dragConstraints={imagesRef}
                    whileDrag={{cursor: "grabbing"}}
                    onDragStart={() => setClickable(false)}
                    onDragEnd={() => setClickable(false)}
                    onMouseUp={() => setClickable(true)}
                    drag="x"
                >
                    {
                        array.map((e,i) => 
                        <div className="product_card_image" 
                            key={"image" + i}
                            image_index={"image_index" + i}
                            onClick={(e) => {
                                let evt = e.currentTarget as HTMLInputElement
                                if(clickable === true){
                                    imageOpened()
                                    setImagesModalOpen(true);
                                    document.body.setAttribute("overflow", "hidden")
                                    setImageIndex((evt.getAttribute("image_index") || "image_index").replaceAll("image_index", ""))
                                }}}
                        >
                            <img
                                src={e} 
                                draggable="false"
                            />
                        </div>)
                    }
                </motion.div>
            </div>
            {
                <AnimatePresence initial={false}>
                    {imagesModalOpen && 
                        <Backdrop closeAnimation={() => {
                            backdropClose()
                            imageOpened()
                        }}>
                            <span className="gallery_button gallery_button_left" draggable="false" onClick={(e) => {
                                e.stopPropagation();
                                galleryLeftButton();
                            }} style={{rotate: "180deg"}}>
                                <img src={modal_arrow} alt="" />
                            </span>
                           <AnimatePresence mode="wait">
                                    
                                    <motion.div 
                                        draggable="false"
                                        className="galley_image_box" 
                                        onClick={(e) => e.stopPropagation()}
                                        initial={{opacity: 0}} 
                                        animate={{opacity:1}} 
                                        exit={{opacity: 0}} 
                                        key={imageIndex}
                                    >
                                        {<img src={array[parseInt(imageIndex)]} />}
                                    </motion.div>
                                
                            </AnimatePresence>
                            <span className="gallery_image_counter">
                                <AnimatePresence mode="wait">
                                    <motion.span   
                                        initial={{opacity: 0}} 
                                        animate={{opacity:1}} 
                                        exit={{opacity: 0}} 
                                        key={imageIndex}
                                        >
                                        {parseInt(imageIndex) + 1}
                                    </motion.span>
                                </AnimatePresence>
                                <span>/{array.length}</span>
                            </span>

                            <span className="gallery_button gallery_button_right" draggable="false" onClick={(e) => {
                                e.stopPropagation();
                                galleryRightButton();
                            }}>
                                <img src={modal_arrow} alt="" />
                            </span>
                            <span className="gallery_modal_close" draggable="false" onClick={(e) => {
                                e.stopPropagation();
                                imageGalleryClose();
                            }}>
                                <img src={modal_close} alt="" />
                            </span>

                        </Backdrop>
                    }
                </AnimatePresence>
            }
        </>
    )
}