import "./Hero.scss";
import { mirrorEasing, motion } from "framer-motion";

const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            }
        }
    }

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div class="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer and UI/UX Designer</motion.h1>

                    <motion.div variants={textVariants} class="buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants} className="button-secondary">Contact Me</motion.button>
                    </motion.div>
                    <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>

            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;