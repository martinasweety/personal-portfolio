import { ABOUT_TEXT } from '../assets/constants/index.js'
import aboutImg from "../assets/abt.jpg"

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>About
                <span className='text-neutral-500'>Me</span>
            </h2>
            <div className='flex '>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl w-60 h-60' src={aboutImg} />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-1'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;