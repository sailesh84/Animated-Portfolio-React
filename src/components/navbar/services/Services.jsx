import "./Services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
    const ref = useRef();

    const variants = {
        initial: {
            x: -500,
            y: 0,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div class="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div class="textContainer">
                <p>
                    I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div class="titleContainer">
                <div class="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div class="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div class="listContainer">
                <motion.div class="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in sagittis
                        urna, molestie auctor nunc.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div class="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in sagittis
                        urna, molestie auctor nunc.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div class="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in sagittis
                        urna, molestie auctor nunc.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div class="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in sagittis
                        urna, molestie auctor nunc.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>

    )
}

export default Services;