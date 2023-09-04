import React, { MouseEventHandler } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import JsonProducts from "../Products.json"
import { ReactNode } from "react";

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      category?: string;
    }
  }

interface Category {
    category: string;
    isActive: boolean;
    click: MouseEventHandler;
}

interface ProductArray{
    category: string;
    name: string;
    avatar: string;
    status: string;
    rating: string,
    stock: number;
    prices: (string | number)[];
}

interface Id{
    id: string;
    array: ProductArray[];
}


export function ActiveCategory({category, isActive, click}: Category){
    return(
        <span onClick={click} className={`category ${isActive ? "active" : ""}`} category={category}>{category}</span>
    )
}

export function ProductCard({id, array}: Id){
    return(
        <motion.div className="product_card"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
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
                        <span>{array[parseInt(id)].rating}</span>
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
                <span className="product_view_button"><Link to="/">From {array[parseInt(id)].prices[0]}$</Link></span>
            </div>
        </motion.div>
    )
}

export default function Products() {

    let [search, setSearch] = React.useState("")
    let [categoryNumber, setCategoryNumber] = React.useState(1);
    let [render, setRender] = React.useState(0)
    let [categoryName, setCategoryName] = React.useState("All")
    let [newArray, setNewArray] = React.useState<ProductArray[]>()

    function getProducts() {
        if(categoryName === "All"){
            setNewArray([...JsonProducts]);
        } else {
            setNewArray(JsonProducts.filter((e) => e.category.toLowerCase() === categoryName.toLowerCase()));
        }
    }

    function setProducts() {
        if(search === ""){
            getProducts()
        } else {
            setNewArray(JsonProducts.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())));
        }
    }

    React.useEffect(() => {
        getProducts()
    }, [categoryName])

    return(
        <div className="products box">
            <div className="container">
                <div className="products_title">
                    <h1 className="products_title_text">
                        <span className="gradient">Explore</span>
                        <span>Cheats</span>
                    </h1>
                </div>
                <p className="products_title_subhead">
                    Extensive selection of private cheats for games.
                </p>
                <div className="products_search">
                    <div className="input_box">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <motion.input 
                            placeholder="Radiance, Shxdow, Cola and etc."
                            type="text"
                            value={search} 
                            
                            onKeyDown={(e) => {
                                if(e.key.toLowerCase() === "enter") setProducts()
                            }}

                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            onBlur={(e) => {
                                setSearch(e.target.value)
                            }}
                        />
                        <span className="search_button" onClick={() => {
                            setProducts()
                        }}>Search</span>
                    </div>
                </div>
                <div className="products_category">
                        
                        <ActiveCategory category="All" isActive={categoryNumber === 1} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(1)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="Rust" isActive={categoryNumber === 2} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(2)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="Valorant" isActive={categoryNumber === 3} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(3)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="Escape from Tarkov" isActive={categoryNumber === 4} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(4)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="Apex Legends" isActive={categoryNumber === 5} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(5)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="Fortnite" isActive={categoryNumber === 6} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(6)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="CoD MW2" isActive={categoryNumber === 7} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(7)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="Rainbow Six" isActive={categoryNumber === 8} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(8)
                            getProducts()
                        }}></ActiveCategory>
                        <ActiveCategory category="Spoofer" isActive={categoryNumber === 9} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(9)
                            getProducts()
                        }}></ActiveCategory>

                </div>
                <div className="products_section">
                    <div className="box-gradient"></div>
                    
                    <AnimatePresence initial={false}>
                        {
                            newArray?.map((e,i) => <ProductCard id={i+""} array={newArray || JsonProducts} key={"ProductCard" + i} />)
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}                    