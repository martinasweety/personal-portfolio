import {RiReactjsLine} from 'react-icons/ri'
import {FaHtml5} from 'react-icons/fa6'
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { animate, motion } from "framer-motion";


const iconVariants =(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})

const Technologies = () => {
  return  <div className='border-b border-neutral-800 pb-24'>
    <h2 className='my-20 text-center text-4xl'>Technologies</h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <FaHtml5 className='text-5xl text-orange-600'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <FaCss3Alt  className='text-5xl text-blue-600'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <FaBootstrap className='text-5xl text-violet-900'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(9)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <IoLogoJavascript className='text-5xl text-yellow-400'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(7)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <RiReactjsLine className='text-5xl text-cyan-400'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2.8)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <FaPython  className='text-4xl text-yellow-600'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(6.7)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <DiMysql  className='text-5xl text-orange-400'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-neutral-800 py-4'>
            <RiTailwindCssFill className='text-5xl text-blue-500'/>
        </motion.div>
    </div>
    </div>
  
}

export default Technologies