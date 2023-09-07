import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

import ProductImages from "./ProductImages";

interface ProductArray{
    category: string;
    name: string;
    avatar: string;
    status: string;
    rating: (string)[];
    stock: number;
    bans_per_month: string;
    subscription: (string)[];
    prices: (string)[];
    description: string;
    features: (string)[];
    cheat_images: (string)[];
}

interface Id{
    id: string;
    array: ProductArray[];
}

export default function ProductCard({id, array}: Id){

    let featuresRef = React.useRef(null);
    let [imageOpened, setImageOpened] = React.useState(false)

    return(
        <motion.div className="product_card"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            style={{zIndex: `${imageOpened ? 1000 : 0}`}}
        >
            <div className="product_card_info">
                <div className="product_card_text">
                        <div className="product_card_cheat_logo">
                            <img src={array[parseInt(id)].avatar} alt="" />
                        </div>
                    <div className="product_card_cheat_info">
                        <div className="product_card_name">
                            <span className="product_card_cheat_name">{array[parseInt(id)].name}</span>
                        </div>
                        <div className="product_card_cheats_price">
                            <span className="product_category">{array[parseInt(id)].category}</span>
                            <span className="product_dot">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#000000" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
                                    </g>
                                </svg>
                            </span>
                            <span className={`product_undetected ${array[parseInt(id)].status === "Undetected" ? "undetected" : "detected"}`}>{array[parseInt(id)].status}</span>
                        </div>
                    </div>
                </div>
                <div className="product_card_cheats_about">
                    <span className="product_card_cheat_rating">
                        Rating 
                        <svg viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                        <span>
                            {
                                array[parseInt(id)].rating.length === 0 ? "0.0" :
                                (array[parseInt(id)].rating.map((e) => parseFloat(e)).reduce((acc: number, number: number) => acc + number, 0)/array[parseInt(id)].rating.length).toFixed(1)
                            }
                        </span>
                    </span>
                    <span className="product_dot">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#000000" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
                            </g>
                        </svg>
                    </span>
                    <span className="in_stock">In stock <span>{array[parseInt(id)].stock}</span></span>
                </div>
                <div className="product_card_cheats_about">
                    <span className="bans_per_month">Bans per month <span>{array[parseInt(id)].bans_per_month}</span></span>
                </div>
                <div className="product_card_cheat_features" ref={featuresRef}>
                    <motion.div 
                        className="product_card_cheat_features_container"
                        dragConstraints={featuresRef}
                        whileDrag={{cursor: "grabbing"}}
                        drag="x"
                    >
                        {
                            array[parseInt(id)].features.map((e,i) => <span key={"span"+i}>{e}</span>)
                        }
                    </motion.div>
                </div>
                <div className="product_card_cheat_images">
                    <ProductImages array={array[parseInt(id)].cheat_images} imageOpened={() => setImageOpened(imageOpened => !imageOpened)}/>
                </div>
                <div className="product_card_cheat_description">
                    {array[parseInt(id)].description}
                </div>
                <span className="product_view_button"><Link to="/">From {array[parseInt(id)].prices[0]}$</Link></span>
            </div>
        </motion.div>
    )
}