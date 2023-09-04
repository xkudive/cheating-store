import React from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import glb from "./scene-transformed.glb";

import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';
import { useGLTF, PerspectiveCamera, OrbitControls, useAnimations, useTexture, Reflector } from "@react-three/drei";
import { GLTF } from 'three-stdlib';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing';

import arrow from "../images/hero_arrow.png"
import button_arrow from "../images/arrow.svg"
import star from "../images/star.png"
import circle from "../images/circle_half.png"
import mini_circle from "../images/mini_circle.png"
import sale from "../images/sale.png"
import heroGlow from "../images/hero_glow1.webp";
import logo_text from "../images/logo_text_1.png";

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh
        Object_6: THREE.Mesh
    }
    materials: {
        Clouds: THREE.MeshBasicMaterial
        Planet: THREE.MeshBasicMaterial
    }
}
      
type ActionName = 'Animation'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>
      
export function Planet(props: JSX.IntrinsicElements['group']) {
    const group = React.useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF(glb) as GLTFResult
    const { actions, names } = useAnimations(animations, group)

    React.useEffect(() => {
        actions["Animation"]?.reset().fadeIn(0.5).play()
    }, [])

    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
            <group name="GLTF_SceneRootNode" rotation={[0.031, 0, 0.064]}>
            <group name="Clouds_1">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Clouds} />
            </group>
            <group name="Planet_2">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Planet} />
            </group>
            </group>
        </group>
        </group>
    )
}

export default function Hero() {

    let letterIndex = 0;

    let [counter1, setCounter1] = React.useState(0)
    let [counter2, setCounter2] = React.useState(0)
    let [counter3, setCounter3] = React.useState(0)

    React.useEffect(() => {
        function counterFunc(number: number, setNumber: Function, timer: number) {
            let stopNumber = 0;
            setInterval(() => {
                if(stopNumber < number) {
                    setNumber((counter: number) => counter + 50);
                    stopNumber += 50;
                }
            }, timer);
        }
        function counterFunc2(number: number, setNumber: Function, timer: number) {
            let stopNumber = 0;
            setInterval(() => {
                if(stopNumber < number) {
                    setNumber((counter: number) => counter + 1);
                    stopNumber += 1;
                }
            }, timer);
        }
        function counterFunc3(number: number, setNumber: Function, timer: number) {
            let stopNumber = 0;
            setInterval(() => {
                if(stopNumber < number) {
                    setNumber((counter: number) => counter + 10);
                    stopNumber += 10;
                }
            }, timer);
        }

          setTimeout(() => {
            counterFunc(5000, setCounter1, 20)
            counterFunc2(20, setCounter2, 100)
          }, 2800)

          setTimeout(() => {
            counterFunc3(1000, setCounter3, 20)
          }, 3400)
    }, []);

    function findImage(e: string, i: number) {
        if (e === "buy") {
            return <><p key={"title" + i}>{e.split("").map((element, index) => {return(
                letterIndex++,
                <span style={{animationDelay: letterIndex * 0.03 + 0.8 + "s"}} key={"title" + i + index}>{element}</span>
            )})}</p><div className="hero_title_image" key={"title" + i + "3"}><img draggable="false" src={arrow} alt="" /></div></>
        } else if(e === "cheats") {
            return <p key={"title" + i} className="wordAnimation">{e.split("").map((element, index) => {return(
                letterIndex++,
                <span style={{animationDelay: letterIndex * 0.03 + 0.8 + "s"}} key={"title" + i + index + "1"}><span className="letterOuter" key={"title" + i + index}><span className="letter" style={{animationDelay: index * 133.3 + "ms"}} key={"title" + i + index + "2"}>{element}</span></span></span>
            )})}</p>
        }else {
            return <p key={"title" + i}>{e.split("").map((element, index) => {return(
                letterIndex++,
                <span style={{animationDelay: letterIndex * 0.03 + 0.8 + "s"}} key={"title" + i + index}>{element}</span>
            )})}</p>
        }
    }

    return(
        <>

        <div className="hero box">
            <div className="container">
                <div className="hero-bg-img-box">
                    <img src={heroGlow} alt="" />
                </div>
                <div className="hero_left">
                    <p className="hero_supheading">
                        Cheats for popular video games ✨
                    </p>
                    <div className="hero_title">
                        {
                            "The best place to find and buy excellent cheats".split(" ").map((e, i) => findImage(e, i))
                        }
                    </div>
                    <p className="hero_subheading">
                        Escrow based Marketplace with the best private cheats on the Internet, at great prices.
                    </p>
                    <div className="circle_rotate_container">
                        <div className="circle_rotate">
                            {
                                "The best prices for cheats ".split("").map((e,i) => <span key={"circle" + i} style={{rotate: `${i*(360/27)}deg`}}><span>{e}</span></span>)
                            }
                        </div>
                        <img draggable="false" src={star} alt="" />
                    </div>
                    <div className="hero_buttons">
                        <Link to="/"><span className="explore_now"><span>Explore Now</span></span></Link>
                        <div className="hero_demo">
                            <div className="hero_demo_images">
                                <img src={circle} alt="" />
                                <img src={mini_circle} alt="" />
                                <img src={button_arrow} alt="" />
                            </div>
                            <span>View Popular</span>
                        </div>
                    </div>
                    
                    <div className="hero_counters">
                        <div className="hero_counter">
                            <span className="hero_counter_number">{counter2}+</span>
                            <span className="hero_counter_text">Cheats</span>
                        </div> 
                        <div className="hero_counter">
                            <span className="hero_counter_number">{counter1 === 5000 ? "5k" : counter1}+</span>
                            <span className="hero_counter_text">Customers</span>
                        </div> 
                    </div>
                </div>
                <div className="hero_right">
                    {/* <div className="hero_right_video" draggable="false">
                        <iframe draggable="false"
                            src="https://player.vimeo.com/video/857670493?dnt=1&amp;loop=1&amp;background=1&amp;app_id=58479" 
                            frameBorder="0" allow="autoplay;"
                            title="dadaya pidr xkudive"
                        ></iframe>
                    </div> */}
                    <div className="sticker_counter_container">
                        <div className="sticker">
                        </div>
                        <div className="sticker_counter">
                            <span className="sticker_counter_inner">{counter3}+</span>
                            <span className="sticker_counter_subhead">Products Sold</span>
                        </div>
                        <img className="" src={sale} alt=""  draggable="false"/>
                    </div>
                    <Canvas
                        className="planet_model"
                        style={{width: `100%`, position: `relative`, aspectRatio: "1 / 1"}}
                    >  
                        <ambientLight color={"#ddffa6"} intensity={1}/>
                        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
                        <Planet />
                        <OrbitControls enableZoom={false} enablePan={false} />
                        <EffectComposer multisampling={8}>
                            <Bloom kernelSize={5} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.1} />
                            <Bloom kernelSize={KernelSize.HUGE}  luminanceThreshold={0} luminanceSmoothing={0} intensity={0.2} />
                        </EffectComposer>
                    </Canvas>
                </div>
            </div>
        </div>

        <div className="marquee">
            <div className="marquee_container">
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
            </div>
            <div className="marquee_container">
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
            </div>
            <div className="marquee_container">
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
            </div>
            <div className="marquee_container">
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
                <div className="marquee_element">
                    <img src={logo_text} alt="" />
                </div>
            </div>
        </div>

        </>
        
    )
}
