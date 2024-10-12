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
    <TracingBeam className="hidden lg:flex px-6">
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
              <CardHeader className='pb-2'>
                  <CardTitle className='flex justify-between items-center'>
                    <p>Train.io</p>
                      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                        <span className='text-lg'>{`Featured Project`}</span>
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </button>
                  </CardTitle>
                  <CardDescription>A better fitness app</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 text-muted-foreground'>
                  <div>
                    <ul class="flex flex-wrap" aria-label="Technologies used:">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Django</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">OpenAI API</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Heroku</div>
                      </li>
                    </ul>
                  </div>
                  <img src='/train.io_image.jpeg' alt="Train.io" className="w-full h-auto border-solid border-2 rounded-md" />
                  <p className='text-sm'>Developed an online training platform featuring an artifical intelligence powered workout creator, personal training system, and a workout journal.</p>
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <a href="https://trainio-liart.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-cyan-600 transition-colors duration-500'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <a href='https://github.com/jhirschv' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size='xl' className='hover:text-cyan-600 transition-colors duration-500' icon={faGithub} />
                </a>
              </CardFooter>
          </Card>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Card className='border-0 rounded-[22px]'> 
              <CardHeader className='pb-2'>
                  <CardTitle>BestTech</CardTitle>
                  <CardDescription>Make the best purchase</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 text-muted-foreground'>
                  <div>
                    <ul class="flex flex-wrap" aria-label="Technologies used:">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Java</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SpringBoot</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MySQL</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Vercel</div>
                      </li>
                    </ul>
                  </div>
                  <img src='/BestTech.png' alt="besttech image" className="w-full h-auto border-solid border-2 rounded-md" />
                  <p className='text-sm'>Designed a modern eCommerce website that features a Machine learning product recommendation system and an admin dashboard. 
                  </p>
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <a href="https://besttech-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-cyan-600 transition-colors duration-500'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <a href='https://github.com/jhirschv' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size='xl' className='hover:text-cyan-600 transition-colors duration-500' icon={faGithub} />
                </a>
              </CardFooter>
          </Card>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Card className='border-0 rounded-[22px]'> 
              <CardHeader className='pb-2'>
                  <CardTitle>Discourse</CardTitle>
                  <CardDescription>Chat Anywhere, Anytime</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 text-muted-foreground'>
                  <div>
                    <ul class="flex flex-wrap" aria-label="Technologies used:">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Django</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Websockets</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JWT Authentication</div>
                      </li>
                    </ul>
                  </div>
                  <img src='/discourse.png' alt="Discouse image" className="w-full h-auto border-solid border-2 rounded-md" />
                    <p className='text-sm'>Built a real time messaging app with Django channels, websockets, and React. 
                  </p>
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <a href="https://discourse-chat-app-frontend.vercel.app/home/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-cyan-600 transition-colors duration-500'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <a href='https://github.com/jhirschv' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size='xl' className='hover:text-cyan-600 transition-colors duration-500' icon={faGithub} />
                </a>
              </CardFooter>
          </Card>
          </BackgroundGradient>
        </div>
      </div>
    </TracingBeam>
    <div className="lg:hidden w-full">
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
              <CardHeader className='pb-2'>
                  <CardTitle className='flex justify-between items-center'>
                    <p>Train.io</p>
                      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                        <span className='text-lg'>{`Featured Project`}</span>
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </button>
                  </CardTitle>
                  <CardDescription>A better fitness app</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 text-muted-foreground'>
                  <div>
                    <ul class="flex flex-wrap" aria-label="Technologies used:">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Django</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">OpenAI API</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Heroku</div>
                      </li>
                    </ul>
                  </div>
                  <img src='/train.io_image.jpeg' alt="Train.io" className="w-full h-auto border-solid border-2 rounded-md" />
                  <p className='text-sm'>Developed an online training platform featuring an artifical intelligence powered workout creator. 
                  <span className='hidden md:inline'> Features a comprehensive workout journal and progress visalization. Real time messaging for trainer - client interaction.</span>
                  </p>
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <a href="https://trainio-liart.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-cyan-600 transition-colors duration-500'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <a href='https://github.com/jhirschv' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size='xl' className='hover:text-cyan-600 transition-colors duration-500' icon={faGithub} />
                </a>
              </CardFooter>
          </Card>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Card className='border-0 rounded-[22px]'> 
              <CardHeader className='pb-2'>
                  <CardTitle>BestTech</CardTitle>
                  <CardDescription>Make the best purchase</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 text-muted-foreground'>
                  <div>
                    <ul class="flex flex-wrap" aria-label="Technologies used:">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Java</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SpringBoot</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MySQL</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Vercel</div>
                      </li>
                    </ul>
                  </div>
                  <img src='/BestTech.png' alt="besttech image" className="w-full h-auto border-solid border-2 rounded-md" />
                  <p className='text-sm'>Designed a modern eCommerce website that features a Machine learning product recommendation system and an admin dashboard. 
                  </p>
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <a href="https://besttech-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-cyan-600 transition-colors duration-500'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <a href='https://github.com/jhirschv' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size='xl' className='hover:text-cyan-600 transition-colors duration-500' icon={faGithub} />
                </a>
              </CardFooter>
          </Card>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          <Card className='border-0 rounded-[22px]'> 
              <CardHeader className='pb-2'>
                  <CardTitle>Discourse</CardTitle>
                  <CardDescription>Chat Anywhere, Anytime</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 text-muted-foreground'>
                  <div>
                    <ul class="flex flex-wrap" aria-label="Technologies used:">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Django</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Websockets</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JWT Authentication</div>
                      </li>
                    </ul>
                  </div>
                  <img src='/discourse.png' alt="Discouse image" className="w-full h-auto border-solid border-2 rounded-md" />
                    <p className='text-sm'>Built a real time messaging app with Django channels, websockets, and React. 
                  </p>
              </CardContent>
              <CardFooter className='flex justify-end items-center gap-6 text-muted-foreground'>
                <a href="https://discourse-chat-app-frontend.vercel.app/home/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-cyan-600 transition-colors duration-500'>
                Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <a href='https://github.com/jhirschv' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size='xl' className='hover:text-cyan-600 transition-colors duration-500' icon={faGithub} />
                </a>
              </CardFooter>
          </Card>
          </BackgroundGradient>
        </div>
      </div>
    </div>

  );
};

export default RightSide;