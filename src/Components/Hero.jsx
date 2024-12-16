import {HERO_CONTENT} from '../assets/constants/index.js'
const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 text-center'>
            <div className='flex '>
                <div className='w-full lg:w1/2'>
                    <div className=''>
                        <h1 className='pb-16 text-6xl  tracking-tight lg:mt-16 lg:text-6xl font-semibold'>
                            Martina Sweety
                        </h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </span>
                        <p className='px-2 lg:px-24 py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                            </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero