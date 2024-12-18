import { HERO_CONTENT } from '../assets/constants/index.js'
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})
const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 text-center'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='flex flex-col justify-center items-center lg:items-center'>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl  tracking-tight lg:mt-16 lg:text-6xl font-semibold'>
                            Martina Sweety
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible" className='px-2 lg:px-24 py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero