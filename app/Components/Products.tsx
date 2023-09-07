import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import JsonProducts from "../Products.json"

import ProductCard from "./Products/ProductCard"
import ActiveCategory from "./Products/ActiveCategory"
import FilterSubscription from "./Products/FilterSubscription"
import FilterRating from "./Products/FilterRating"

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        image_index?: string;
        category?: string;
    }
}

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

export default function Products() {

    let [search, setSearch] = React.useState("");

    let [categoryNumber, setCategoryNumber] = React.useState(1);
    let [categoryName, setCategoryName] = React.useState("All");

    let [newArray, setNewArray] = React.useState<ProductArray[]>();

    let [priceFrom, setPriceFrom] = React.useState("");
    let [priceTo, setPriceTo] = React.useState("");

    let [bansPerMonth, setBansPerMonth] = React.useState("");

    let [featureSelect, setFeatureSelect] = React.useState("");

    let [filterSubscriptionDropdownActive, setFilterSubscriptionDropdownActive] = React.useState(false);
    let [filterSubscriptionNumber, setFilterSubscriptionNumber] = React.useState(1);
    let [filterSubscriptionName, setFilterSubscriptionName] = React.useState("Any");

    let [filterRatingDropdownActive, setFilterRatingDropdownActive] = React.useState(false);
    let [filterRatingNumber, setFilterRatingNumber] = React.useState(1);
    let [filterRatingName, setFilterRatingName] = React.useState("Any");

    function getProducts() {
        if(categoryName === "All"){
            setNewArray([...JsonProducts]);
            submittingFilters([...JsonProducts]);
        } else {
            setNewArray(JsonProducts.filter((e) => e.category.toLowerCase() === categoryName.toLowerCase()));
            submittingFilters(JsonProducts.filter((e) => e.category.toLowerCase() === categoryName.toLowerCase()));
        }
    }

    function setProducts() {
        if(search === ""){
            getProducts();
        } else {
            setNewArray(JsonProducts.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())));
            submittingFilters(JsonProducts.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())));
        }
    }

    function filterRatingCategoryCheck() {
        if (filterRatingName === "1") return "> 1 star";
        else if (filterRatingName === "2") return "> 2 stars";
        else if (filterRatingName === "3") return "> 3 stars";
        else if (filterRatingName === "4") return "> 4 stars";
        else if (filterRatingName === "5") return "5 stars";
        else return filterRatingName;
    }

    function filterSubscriptionCategoryCheck() {
        if (filterSubscriptionName === "1") return "1 day";
        else if (filterSubscriptionName === "3") return "3 days";
        else if (filterSubscriptionName === "7") return "1 week";
        else if (filterSubscriptionName === "30") return "1 month";
        else return filterSubscriptionName;
    }

    React.useEffect(() => {
        getProducts();
    }, [categoryName])

    let filtersContentRef = React.useRef<HTMLDivElement>(null);
    let [height, setHeight] = React.useState(0);
    let [showToggle, setShowToggle] = React.useState(true);

    React.useEffect(() => {
        function getShowHeight(){
            let ref = filtersContentRef.current;
            let currentHeight = ref?.scrollHeight;
            setHeight(currentHeight || 0);
        }
        getShowHeight()
        window.addEventListener("resize", getShowHeight);
        return () => window.removeEventListener("resize", getShowHeight);
    }, [])

    let [applyPrice, setApplyPrice] = React.useState(false);
    let [applyFeature, setApplyFeature] = React.useState(false);
    let [applySubscription, setApplySubscription] = React.useState(false);
    let [applyRating, setApplyRating] = React.useState(false);
    let [applyBpm, setApplyBpm] = React.useState(false);

    function submittingFilters(newArray: ProductArray[]) {
        let filtered = newArray || JsonProducts;

        if (applyPrice !== false) {
            let filter = filtered?.filter((e) => {
                return (e.prices.map((elem) => parseInt(elem))[0] <= parseInt(priceFrom) || e.prices.map((elem) => parseInt(elem))[0] <= parseInt(priceTo)) && (e.prices.map((elem) => parseInt(elem))[e.prices.length-1] >= parseInt(priceFrom) || e.prices.map((elem) => parseInt(elem))[e.prices.length-1] >= parseInt(priceTo));
            })
            filtered = [...filter]
        }
        if (applyFeature !== false) {
            let filter = filtered?.filter((e) => e.features.map(elem => elem.replaceAll(" ", "").toLowerCase()).includes(featureSelect.replaceAll(" ", "").toLowerCase()));
            filtered = [...filter]
        }
        if(applySubscription !== false) {
            let filter = filtered?.filter((e) => e.subscription.map(elem => elem.replaceAll(" ", "").toLowerCase()).includes(filterSubscriptionName.replaceAll(" ", "").toLowerCase()));
            filtered = [...filter]
        }
        if(applyRating !== false) {
            let filter = filtered?.filter((e) => (e.rating.length !== 0 ? (e.rating.map(elem => parseInt(elem)).reduce((acc: number, number: number) => acc + number, 0) / e.rating.length) : 0) >= parseInt(filterRatingName));
            filtered = [...filter]
        }
        if(applyBpm !== false) {
            let filter = filtered?.filter((e) => parseInt(e.bans_per_month)  <= parseInt(bansPerMonth));
            filtered = [...filter]
        }
        setNewArray(filtered)
    }

    React.useEffect(() => {
        getProducts();
    }, [applyPrice])
    React.useEffect(() => {
        getProducts();
    }, [applyFeature])
    React.useEffect(() => {
        getProducts();
    }, [applySubscription])
    React.useEffect(() => {
        getProducts();
    }, [applyRating])
    React.useEffect(() => {
        getProducts();
    }, [applyBpm])


    return(
        <div className="products box">
            <div className="container" id="products">
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
                                if(e.key.toLowerCase() === "enter") setProducts();
                            }}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            onBlur={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                        <span className="search_button" onClick={() => {
                            setProducts()
                        }}>Search</span>
                    </div>
                </div>
                <div className="products_filters">
                    <div className="products_filters_filter">
                        <div className="current_filters">
                            <span className="current_filters_title">Filters:</span>
                            <div className="added_filters">
                                <AnimatePresence initial={false}>
                                    {((priceFrom !== "" && priceTo !== "") && applyPrice) &&
                                        <motion.div 
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        key={applyPrice+""}
                                        onClick={() => {
                                            setPriceFrom("");
                                            setPriceTo("");
                                            setApplyPrice(false);
                                        }}>
                                            <span>{priceFrom}$ - {priceTo}$</span>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                                <AnimatePresence initial={false}>
                                    {(featureSelect !== "" && applyFeature) &&
                                        <motion.div 
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        key={applyFeature+""}
                                        onClick={() => {;
                                            setFeatureSelect("");
                                            setApplyFeature(false);
                                        }}>
                                            <span>{featureSelect}</span>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                                <AnimatePresence initial={false}>
                                    {(filterSubscriptionName !== "Any" && applySubscription) &&
                                        <motion.div 
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        key={applySubscription+""}
                                        onClick={() => {
                                            setFilterSubscriptionName("Any");
                                            setFilterSubscriptionNumber(1);
                                            setApplySubscription(false);
                                        }}>
                                            <span>{filterSubscriptionCategoryCheck()}</span>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                                <AnimatePresence initial={false}>
                                    {(filterRatingName !== "Any" && applyRating) &&
                                        <motion.div 
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        key={applyRating+""}
                                        onClick={() => {
                                            setFilterRatingName("Any");
                                            setFilterRatingNumber(1);
                                            setApplyRating(false);
                                        }}>
                                            <span>{filterRatingCategoryCheck()}</span>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                                <AnimatePresence initial={false}>
                                    {(bansPerMonth !== "" && applyBpm) &&
                                        <motion.div 
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        key={applyBpm + ""}
                                        onClick={() => {
                                            setBansPerMonth("");
                                            setApplyBpm(false);
                                        }}>
                                            <span>{"< " + bansPerMonth} BPM</span>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="filter_button" onClick={() => {
                            setShowToggle((showToggle) => !showToggle);
                            setFilterSubscriptionDropdownActive(false);
                            setFilterRatingDropdownActive(false);
                        }}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z" fill="#fff"></path>
                                </g>
                            </svg>
                            <span>Filters</span>
                        </div>
                    </div>
                    <div className="products_filters_filter_box_wrapper" style={{height: `${showToggle ? "0px" : height + 16 + "px"}`}}>
                        <div className="products_filters_filter_box" style={{opacity: `${showToggle ? "0" : "1"}`, pointerEvents: `${showToggle ? "none" : "all"}`}} ref={filtersContentRef}>
                            <div className="filter_price">
                                <span className="filter_title">Price:</span>
                                <div className="filter_price_set">
                                    <input
                                        className="filter_input_field"
                                        placeholder="From"
                                        type="text" 
                                        value={priceFrom}
                                        maxLength={5}
                                        onChange={(e) => {
                                            let text = (e.target.value).replaceAll(/[^0-9]/g, "");
                                            setPriceFrom(text);
                                            setApplyPrice(false);
                                        }}
                                        onBlur={(e) => {
                                            let text = e.target.value;
                                            if(text === "") {
                                                setPriceTo("");
                                                setPriceFrom("");
                                                return
                                            }
                                            if(text === "" && priceTo === "") return 
                                            if (priceTo === "") {
                                                return setPriceTo(parseInt(text) + 1 + "");
                                            }
                                            if (parseInt(priceTo) <= parseInt(text)) {
                                                setPriceTo(parseInt(text) + 1 + "");
                                            }
                                            setPriceFrom(parseInt(text) + "");
                                        }}
                                    />
                                    <span>-</span>
                                    <input
                                        className="filter_input_field"
                                        placeholder="To"
                                        type="text" 
                                        value={priceTo}
                                        maxLength={5}
                                        onChange={(e) => {
                                            let text = (e.target.value).replaceAll(/[^0-9.]/g, "");
                                            setPriceTo(text);
                                            setApplyPrice(false);
                                        }}
                                        onBlur={(e) => {
                                            let text = e.target.value;
                                            if(text === "") {
                                                setPriceTo("");
                                                setPriceFrom("");
                                                return
                                            }
                                            if(text === "" && priceFrom === "") return  
                                            if (text === "0") {
                                                text = "1";
                                                setPriceTo(text);
                                            }
                                            if (priceFrom === "") {
                                                setPriceFrom("0");
                                            }
                                            if (parseInt(text) <= parseInt(priceFrom)) {
                                                setPriceFrom(parseInt(text) - 1 + "");
                                            }
                                            setPriceTo(parseInt(text)+"");
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="filter_features">
                                <span className="filter_title">Feature:</span>
                                <input
                                        className="filter_input_field feature_input"
                                        placeholder="One feature"
                                        type="text" 
                                        value={featureSelect}
                                        maxLength={16}
                                        onChange={(e) => {
                                            let text = (e.target.value).replaceAll(/[^a-zA-Z ]/g, "");
                                            setFeatureSelect(text);
                                            setApplyFeature(false);
                                        }}
                                        onBlur={(e) => {
                                            let text = (e.target.value).replaceAll(/[^a-zA-Z_ ]/g, "").trim().split(/[\s,\t,\n]+/).join(' ');
                                            setFeatureSelect(text);
                                        }}
                                    />
                            </div>
                            <div className="filter_subscription">
                                <span className="filter_title">Subscription:</span>
                                <div className={`filter_subscription_button ${filterSubscriptionDropdownActive ? " active" : ""}`} onClick={() => {
                                        setFilterSubscriptionDropdownActive((filterSubscriptionDropdownActive) => !filterSubscriptionDropdownActive);
                                        setApplySubscription(false);
                                    }}>
                                    {
                                        filterSubscriptionCategoryCheck()
                                    }
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L4 4L1 0.999999" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <AnimatePresence initial={false}>
                                    {filterSubscriptionDropdownActive && 
                                        <motion.div 
                                            className="filter_subscription_dropdown_menu"
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                        >
                                            <FilterSubscription category="Any" isActive={filterSubscriptionNumber=== 1} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterSubscriptionName(evt.getAttribute("category") || "Any");
                                                setFilterSubscriptionNumber(1);
                                            }} />
                                            <FilterSubscription category="1" isActive={filterSubscriptionNumber === 2} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterSubscriptionName(evt.getAttribute("category") || "Any");
                                                setFilterSubscriptionNumber(2);
                                            }} />
                                            <FilterSubscription category="3" isActive={filterSubscriptionNumber === 3} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterSubscriptionName(evt.getAttribute("category") || "Any");
                                                setFilterSubscriptionNumber(3);
                                            }} />
                                            <FilterSubscription category="7" isActive={filterSubscriptionNumber === 4} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterSubscriptionName(evt.getAttribute("category") || "Any");
                                                setFilterSubscriptionNumber(4);
                                            }} />
                                            <FilterSubscription category="30" isActive={filterSubscriptionNumber === 5} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterSubscriptionName(evt.getAttribute("category") || "Any");
                                                setFilterSubscriptionNumber(5);
                                            }} />
                                            <FilterSubscription category="Lifetime" isActive={filterSubscriptionNumber === 6} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterSubscriptionName(evt.getAttribute("category") || "Any");
                                                setFilterSubscriptionNumber(6);
                                            }} />
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            <div className="filter_subscription">
                                <span className="filter_title">Minimum Rating:</span>
                                <div className={`filter_subscription_button ${filterRatingDropdownActive ? " active" : ""}`} onClick={() => {
                                        setFilterRatingDropdownActive((filterRatingDropdownActive) => !filterRatingDropdownActive);
                                        setApplyRating(false);
                                    }}>
                                    {
                                        filterRatingCategoryCheck()
                                    }
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L4 4L1 0.999999" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <AnimatePresence initial={false}>
                                    {filterRatingDropdownActive && 
                                        <motion.div 
                                            className="filter_subscription_dropdown_menu"
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                        >
                                            <FilterRating category="Any" isActive={filterRatingNumber=== 1} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterRatingName(evt.getAttribute("category") || "Any");
                                                setFilterRatingNumber(1);
                                            }} />
                                            <FilterRating category="1" isActive={filterRatingNumber === 2} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterRatingName(evt.getAttribute("category") || "Any");
                                                setFilterRatingNumber(2);
                                            }} />
                                            <FilterRating category="2" isActive={filterRatingNumber === 3} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterRatingName(evt.getAttribute("category") || "Any");
                                                setFilterRatingNumber(3);
                                            }} />
                                            <FilterRating category="3" isActive={filterRatingNumber === 4} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterRatingName(evt.getAttribute("category") || "Any");
                                                setFilterRatingNumber(4);
                                            }} />
                                            <FilterRating category="4" isActive={filterRatingNumber === 5} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterRatingName(evt.getAttribute("category") || "Any");
                                                setFilterRatingNumber(5);
                                            }} />
                                            <FilterRating category="5" isActive={filterRatingNumber === 6} click={(e) => {
                                                let evt = e.currentTarget as HTMLInputElement;
                                                setFilterRatingName(evt.getAttribute("category") || "Any");
                                                setFilterRatingNumber(6);
                                            }} />
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            <div className="filter_bpm">
                                <span className="filter_title">Max. Bans per month:</span>
                                <input
                                        className="filter_input_field bpm_input"
                                        placeholder="Bans per month"
                                        type="text" 
                                        value={bansPerMonth}
                                        maxLength={4}
                                        onChange={(e) => {
                                            let text = (e.target.value).replaceAll(/[^0-9]/g, "");
                                            setBansPerMonth(text);
                                            setApplyBpm(false);
                                        }}
                                        onBlur={(e) => {
                                            let text = (e.target.value).replaceAll(/[^0-9]/g, "");
                                            setBansPerMonth(text);
                                        }}
                                    />
                            </div>
                            <div className="filters_apply" onClick={() => {
                                if (priceFrom !== "" && priceTo !== "") setApplyPrice(true);
                                if (featureSelect !== "") setApplyFeature(true);
                                if(filterSubscriptionName !== "Any") setApplySubscription(true);
                                if(filterRatingName !== "Any") setApplyRating(true);
                                if(bansPerMonth !== "") setApplyBpm(true);
                                setShowToggle((showToggle) => !showToggle);
                                setFilterSubscriptionDropdownActive(false);
                                setFilterRatingDropdownActive(false);
                            }}>
                                Apply
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products_category">
                        
                        <ActiveCategory category="All" isActive={categoryNumber === 1} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(1)
                        }} />
                        <ActiveCategory category="Rust" isActive={categoryNumber === 2} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(2)
                        }} />
                        <ActiveCategory category="Valorant" isActive={categoryNumber === 3} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(3)
                        }} />
                        <ActiveCategory category="Escape from Tarkov" isActive={categoryNumber === 4} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(4)
                        }} />
                        <ActiveCategory category="Apex Legends" isActive={categoryNumber === 5} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(5)
                        }} />
                        <ActiveCategory category="Fortnite" isActive={categoryNumber === 6} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(6)
                        }} />
                        <ActiveCategory category="CoD MW2" isActive={categoryNumber === 7} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(7)
                        }} />
                        <ActiveCategory category="Rainbow Six" isActive={categoryNumber === 8} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(8)
                        }} />
                        <ActiveCategory category="Spoofer" isActive={categoryNumber === 9} click={(e) => {
                            let evt = e.currentTarget as HTMLInputElement
                            setCategoryName(evt.getAttribute("category") || "All")
                            setCategoryNumber(9)
                        }} />

                </div>
                <div className="products_section">                    
                    <AnimatePresence initial={false}>
                        {
                            newArray?.length ? 
                                newArray?.map((e,i) => <ProductCard id={i+""} array={newArray || JsonProducts} key={"ProductCard" + i} />) 
                                : 
                                <motion.span 
                                    className="product_not_found"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    Products not found.
                                </motion.span>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}