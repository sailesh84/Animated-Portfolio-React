import "./NavBar.scss";
import {motion} from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

const NavBar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            
            <div className="wrapper">
                <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>Lama Dev</motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
                    <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
                    <a href="#"><img src="/dribbble.png" alt="Dribble" /></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;