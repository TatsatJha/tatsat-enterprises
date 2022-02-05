import React, { MouseEventHandler, useRef } from 'react';
import Link from 'next/link';
import SideBarButton from './SideBarButton';
import { BsChevronDown } from 'react-icons/bs';


export const MainHome = () => {  
  const myRef = React.createRef<HTMLInputElement>()
  const executeScroll = () => myRef.current!.scrollIntoView()   

  return <div className="w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20 font-montserrat">

      <h1 className =  "text-center font-light text-[44px] border-cyan-700  w-fit ml-12 mr-auto p-8 text-stone-300 rounded-lg top-0 translate-y-4 duration-75 shadow-xl">
        <span className='text-orange-700'>Creative Writer</span> <span className='text-cyan-700'>//</span> <span className='text-blue-700'>Software Developer</span>
      </h1>
    
      <div className='flex justify-evenly mt-64'>
        <Link href={"/writing"}>
          <button className='border-orange-900 border-4 text-orange-900 bg-orange-600 p-5 text-2xl hover:-translate-y-2 duration-300 ease-in-out shadow-xl rounded-2xl' > 
            Learn More About My Writing
          </button>
        </Link>
        <Link href={"/dev"}>
          <a className='border-blue-900 border-4 text-blue-900 bg-blue-600 p-5 text-2xl hover:-translate-y-2 duration-300 ease-in-out shadow-xl rounded-2xl' >
            Learn More About My Software
          </a>
        </Link>
      </div>

      <div className='border-b-2 border-cyan-900 pb-32'>
        <div className='hover:brightness-150 hover:translate-y-2 duration-300 ease-in-out'>
          <button className='block font-light text-4xl text-cyan-700 mt-48 w-fit mr-auto ml-auto' onClick={executeScroll}>
            More About Me
          </button>
          <BsChevronDown className='mr-auto ml-auto text-cyan-700 text-5xl'></BsChevronDown>
        </div>
      </div>

      <section className='ml-36 mt-36'>
        <h2 ref= {myRef} className='font-bold text-4xl p-3'> Who I Am </h2>
        <p className='font-serif text-xl m-6 w-1/2'> 
          High school student Based in Phoenix Arizona. I'm passionate about Developing New Projects and Optimizing Processes. I find the best places for Creation to be in Software and Books. I'm working on Developing Progressively more Complex Applications and starting a Business.
        </p>
        <h2 className='font-bold text-4xl p-6'> What I Do </h2>
        <h2 className='font-bold text-4xl p-6'> Experience </h2>
      </section>
    </div>;
};

export const MainWriting = () => {
  return <div className="h-screen w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20">

</div>;
};

export const MainDev = () => {
  return <div className="h-screen w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20">
</div>;
};