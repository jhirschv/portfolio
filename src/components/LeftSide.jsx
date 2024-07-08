import React from 'react';
import { Link } from 'react-scroll';
import './styles.css';


const LeftSide = () => {
  return (
    <div className="sticky top-0 w-1/2 h-screen p-4 z-10 flex flex-col items-center justify-center">
      <h1 className='text-5xl font-bold mb-2'>John Hirsch V</h1>
      <p className="text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Full Stack Developer</p>
      <div className='flex flex-col gap-1'> 
        <Link className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200" to="section1" smooth={true} duration={500}>
            About
        </Link>
        <Link className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200" to="section2" smooth={true} duration={500}>
            Projects
        </Link>
        <Link className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200" to="section3" smooth={true} duration={500}>
            Skills
        </Link>
      </div>
    </div>
      
  );
};

export default LeftSide;