import React from 'react';
import { Link } from 'react-scroll';
import { TypewriterEffect } from './ui/typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';

const LeftSide = () => {

  const words = [
    {
      text: "John",
      className: "lg:text-6xl"
    },
    {
      text: "Hirsch",
      className: "lg:text-6xl"
    },
    {
      text: "V",
      className: "lg:text-6xl"
    }
  ];

  return (
    <div className="relative lg:sticky top-0 w-full lg:w-1/2 h-[60vh] lg:h-screen sm:p-4 z-10 flex flex-col items-center justify-center py-[10%]">
      <div className='flex flex-col w-full p-4 md:p-16 sm:p-0'>
        <div className='w-full lg:h-16'>
          <TypewriterEffect words={words} />
        </div>
        <p className="lg:mt-2 text-2xl font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Full Stack Developer</p>
        <div className='w-full'>
          <ul class="mt-4 w-max">
            <li>
              <Link class="group flex items-center py-3 active" to="section1" smooth={true} duration={500}>
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span class="nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Skills</span>
              </Link>
            </li>
            <li>
              <Link class="group flex items-center py-3" to="section2" smooth={true} duration={500}>
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span class="nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
              </Link>
            </li>
            <li>
              <Link class="group flex items-center py-3" to="section2" smooth={true} duration={500}>
                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span class="nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Education</span>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      <div className='absolute bottom-8 right-10 flex items-center gap-4 mt-4 text-muted-foreground pr-12'>
        <a
          href="/John Hirsch Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative inline-flex items-center justify-center h-11 overflow-hidden rounded-sm p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-[87%] w-[95%] cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Resume
            </span>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/johnhirschv/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon size='3x' className='transition-all duration-300 ease-in-out hover:text-slate-200' icon={faLinkedin} />
        </a>
        <a
        href="https://github.com/jhirschv"
        target="_blank"
        rel="noopener noreferrer">
          <FontAwesomeIcon size='3x' className='transition-all duration-300 ease-in-out hover:text-slate-200' icon={faSquareGithub} />
        </a>
      </div>
    </div>
      
  );
};

export default LeftSide;