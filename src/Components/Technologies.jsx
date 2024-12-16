import {RiReactjsLine} from 'react-icons/ri'
import {FaHtml5} from 'react-icons/fa6'
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";


const Technologies = () => {
  return  <div className='border-b border-neutral-800 pb-24'>
    <h2 className='my-20 text-center text-4xl'>Technologies</h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <FaHtml5 className='text-6xl text-orange-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <FaCss3Alt  className='text-6xl text-blue-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <FaBootstrap className='text-6xl text-violet-900'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <IoLogoJavascript className='text-6xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <RiReactjsLine className='text-6xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <FaPython  className='text-6xl text-yellow-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <DiMysql  className='text-6xl text-orange-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 py-4'>
            <RiTailwindCssFill className='text-6xl text-blue-500'/>
        </div>
    </div>
    </div>
  
}

export default Technologies