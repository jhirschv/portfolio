import React, { useRef } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import { TracingBeam } from './ui/tracing-beam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { BackgroundGradient } from './ui/background-gradient';
import { CardSpotlight } from './ui/card-spotlight';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const RightSide = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <div className='w-full lg:w-1/2'>
    <TracingBeam className="px-6">
      <div className="w-full">
      <div className="p-6 pb-0" ref={section1Ref} id="section1">
          <h1 className="text-2xl font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">SKILLS</h1>
          <div className='grid grid-cols-4 md:grid-cols-6 place-items-center mt-4 gap-4'>
              <img className='h-14' src="logos/python.png" />
              <img className='h-14' src="logos/js.png" />
              <img className='h-14' src="logos/django-logo.png" />
              <img className='h-14' src="logos/React-logo.png" />
              <img className='h-14' src="logos/Java_(1).png" />
              <img className='h-14' src="logos/springBoot.png" />
              <img className='h-14' src="logos/vscode-logo.svg" />
              <img className='h-14' src="logos/git-logo.png" />
              <img className='h-14' src="logos/icons8-docker-logo-240.png" />
              <img className='h-14' src="logos/icons8-aws-logo (1).svg" />
              <img className='h-14' src="logos/icons8-mysql (1).svg" />
              <img className='h-14' src="logos/postgres.png" />
          </div>
        </div>
        <div className="flex flex-col gap-8 p-6" ref={section2Ref} id="section2">
          <h1 className="text-2xl font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">PROJECTS</h1>
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Card className='border-0 rounded-[22px]'> 
              <CardHeader>
                  <CardTitle>Train.io</CardTitle>
                  <CardDescription>A better fitness app</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 text-muted-foreground'>
                  <img src='/train.io_image.jpeg' alt="Train.io" className="w-1/2 h-auto border-solid border-2 rounded-md" />
                  <p>Developed an online training platform featuring an artifical intelligence powered workout creator. 
                  <span className='hidden md:inline'> Features a comprehensive workout journal and progress visalization. Real time messaging for trainer - client interaction.</span>
                  </p>
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <a href="https://trainio-liart.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-cyan-600 transition-colors duration-500'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <FontAwesomeIcon size='xl' className='hover:text-cyan-600 transition-colors duration-500' icon={faGithub} />
              </CardFooter>
          </Card>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Card className='border-0 rounded-[22px]'>
              <CardHeader>
                  <CardTitle>PyCloud</CardTitle>
                  <CardDescription>Learn python, challange others, cloud coding platform.</CardDescription>
              </CardHeader>
              <CardContent className=''>
              <img src='/PyCloud_img.png' alt="Train.io" className="w-1/2 h-auto border-solid border-2 rounded-md" />
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <div className='flex items-center gap-2'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
                <FontAwesomeIcon size='xl' icon={faGithub} />
              </CardFooter>
          </Card>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Card className='border-0 rounded-[22px]'>
              <CardHeader>
                  <CardTitle>BestTech</CardTitle>
                  <CardDescription>Make the best purchase.</CardDescription>
              </CardHeader>
              <CardContent className=''>
              <img src='/BestTech.png' alt="Train.io" className="w-1/2 h-auto border-2 border-solid border-2 rounded-md" />
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <div className='flex items-center gap-2'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
                <FontAwesomeIcon size='xl' icon={faGithub} />
              </CardFooter>
          </Card>
          </BackgroundGradient>
        </div>
      </div>
    </TracingBeam>
    </div>

  );
};

export default RightSide;