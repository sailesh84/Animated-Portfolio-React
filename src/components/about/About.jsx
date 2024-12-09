import "./About.scss";
import { motion } from "framer-motion";

const About = () => {

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

    return (
        <motion.div className="about" variants={variants} initial="initial" animate="animate">
            <motion.span>Hello! It's nice to see you here!</motion.span>
            <motion.h1>About me</motion.h1>
            <motion.p>
                I am a UX/UI designer from Poland. I specialize in creating clean and high converting user experiences for shops. 
                In my daily work I participate in all creation processes, from understanding business needs, user creation, 
                wireframing, design, prototyping and testing.
            </motion.p>
        </motion.div>
    )
}

export default About;
