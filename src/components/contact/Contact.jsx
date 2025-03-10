import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    const variants = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate" ref={ref}>
            <motion.div class="textContainer">
                <motion.h1>Let's work Together</motion.h1>
                <motion.div class="item">
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </motion.div>
                <motion.div class="item">
                    <h2>Address</h2>
                    <span>hello street New York</span>
                </motion.div>
                <motion.div class="item">
                    <h2>Phone</h2>
                    <span>+1 234 5678</span>
                </motion.div>
            </motion.div>

            <div class="formContainer">
                <motion.div className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}>

                    <svg height="450px" width="450px" viewBox="0 0 512 512">
                        <motion.path
                            strokeWidth={2.0}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d="M439.709,78.277C393.092,31.658,331.111,5.986,265.184,5.986S137.275,31.658,90.658,78.277
				c-46.617,46.617-72.291,108.598-72.291,174.525c0,46.897,13.126,92.268,38.02,131.66L1.319,489.191
				c-2.205,4.195-1.606,9.315,1.508,12.887c2.223,2.549,5.399,3.935,8.655,3.935c1.309,0,2.63-0.224,3.908-0.686l119.089-43.14
				c39.175,24.509,84.236,37.431,130.705,37.431c65.927,0,127.908-25.674,174.525-72.291C486.326,380.71,512,318.728,512,252.802
				S486.326,124.894,439.709,78.277z M265.184,476.659c-43.91,0-86.432-12.72-122.964-36.785c-1.899-1.251-4.098-1.893-6.315-1.893
				c-1.317,0-2.639,0.226-3.909,0.687l-96.563,34.979l44.412-84.463c1.963-3.732,1.721-8.241-0.63-11.743
				c-24.787-36.906-37.888-80.005-37.888-124.639c0-123.434,100.422-223.857,223.857-223.857S489.04,129.368,489.04,252.802
				S388.618,476.659,265.184,476.659z"/>

                        <motion.path
                            strokeWidth={2.0}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 4 }} d="M376.224,282.849c-9.804-9.805-25.757-9.804-35.562,0l-18.748,18.748L216.387,196.07l18.749-18.748
				c9.805-9.805,9.805-25.757,0-35.562l-45.613-45.613c-9.806-9.804-25.758-9.804-35.561,0l-33.823,33.822
				c-12.235,12.235-18.974,28.503-18.974,45.807s6.739,33.57,18.974,45.806l176.263,176.263
				c12.629,12.629,29.217,18.943,45.807,18.943c16.588,0,33.177-6.314,45.806-18.943l33.823-33.822
				c9.805-9.805,9.805-25.757,0-35.562L376.224,282.849z M405.602,347.79l-33.823,33.822c-7.898,7.899-18.4,12.249-29.571,12.249
				c-11.17,0-21.672-4.35-29.571-12.249L136.373,205.348c-7.898-7.898-12.248-18.4-12.248-29.571s4.35-21.673,12.249-29.571
				l33.823-33.823c0.426-0.426,0.985-0.639,1.545-0.639c0.56,0,1.119,0.214,1.546,0.639l45.613,45.613
				c0.853,0.852,0.853,2.24,0,3.092l-26.865,26.865c-2.152,2.152-3.362,5.073-3.362,8.117s1.21,5.96 5,3.362,8.117l121.762,121.762
				c2.152,2.152,5.073,3.362,8.117,3.362c3.044,0,5.965-1.21,8.117-3.362l26.865-26.865c0.852-0.853,2.239-0.854,3.091,0
				l45.613,45.613C406.455,345.55,406.455,346.938,405.602,347.79z"/>

                        <motion.path
                            strokeWidth={2.0}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 2 }}
                            d="M447.709,200.7c5.98-2.105,9.121-8.66,7.015-14.64C426.469,105.818,350.3,51.905,265.184,51.905
				c-6.34,0-11.48,5.14-11.48,11.48c0,6.34,5.14,11.48,11.48,11.48c75.391,0,142.859,47.75,167.884,118.82
				c1.661,4.719,6.094,7.671,10.828,7.671C445.161,201.355,446.448,201.144,447.709,200.7z"/>

                        <motion.path
                            strokeWidth={2.0}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 1 }}
                            d="M465.721,240.692c-0.378-6.329-5.818-11.151-12.143-10.776c-6.329,0.378-11.154,5.813-10.776,12.143
				c0.212,3.548,0.319,7.163,0.319,10.743c0,6.34,5.139,11.48,11.48,11.48s11.48-5.14,11.48-11.48
				C466.08,248.768,465.96,244.694,465.721,240.692z"/>

                        <motion.path
                            strokeWidth={2.0}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 2 }}
                            d="M265.184,430.739c-75.597,0-143.125-47.922-168.035-119.248c-2.091-5.986-8.637-9.144-14.623-7.053
				c-5.986,2.09-9.143,8.637-7.053,14.623c28.126,80.531,104.364,134.638,189.711,134.638c6.34,0,11.48-5.14,11.48-11.48
				C276.663,435.879,271.524,430.739,265.184,430.739z"/>

                        <motion.path
                            strokeWidth={2.0}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 1 }}
                            d="M76.97,277.158c6.327-0.426,11.109-5.899,10.683-12.225c-0.27-4.011-0.406-8.092-0.406-12.131
                c0-6.34-5.14-11.48-11.48-11.48c-6.34,0-11.48,5.14-11.48,11.48c0,4.552,0.154,9.152,0.458,13.674
                c0.408,6.064,5.453,10.71,11.443,10.71C76.446,277.184,76.708,277.175,76.97,277.158z"/>

                    </svg>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 1 }}>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea rows="{8}" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </motion.form>
            </div>
        </motion.div>

    )
}

export default Contact;