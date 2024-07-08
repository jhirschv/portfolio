import React, { useRef } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

const RightSide = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <div className="w-1/2">
      <div className="p-12 border" ref={section1Ref} id="section1">
        <p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development.
        Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product 
        studio. My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot 
        where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video 
        course that covers everything you need to know to build a web app with the Spotify API. When I'm not at the computer, I'm usually rock climbing, 
        reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.</p>
      </div>
      <div className="flex flex-col gap-4 p-12 border" ref={section2Ref} id="section2">
        <h1 className='text-center text-2xl font-semibold'>PROJECTS</h1>
        <Card>
            <CardHeader>
                <CardTitle>Train.io</CardTitle>
                <CardDescription>A better fitness app</CardDescription>
            </CardHeader>
            <CardContent>
                <img src='/train.io_image.jpeg' alt="Train.io" className="w-3/4 h-auto" />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>PyCloud</CardTitle>
                <CardDescription>Learn python, challange others, cloud coding platform.</CardDescription>
            </CardHeader>
            <CardContent>
            <img src='/PyCloud_img.png' alt="Train.io" className="w-3/4 h-auto" />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>GlobeChat</CardTitle>
                <CardDescription>Chat with anyone, anywhere.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
      </div>
      <div className="p-12 border" ref={section3Ref} id="section3">
        <h1 className='text-center text-2xl font-semibold'>SKILLS</h1>
        <div className='grid grid-cols-4 place-items-center mt-4 gap-2'>
            <img className='h-16' src="logos/python.png" />
            <img className='h-16' src="logos/js.png" />
            <img className='h-16' src="logos/django-logo.png" />
            <img className='h-16' src="logos/React-logo.png" />
            <img className='h-16' src="logos/html.png" />
            <img className='h-16' src="logos/css-3.png" />
            <img className='h-16' src="logos/vscode-logo.svg" />
            <img className='h-16' src="logos/git-logo.png" />
            <img className='h-16' src="logos/icons8-docker-logo-240.png" />
            <img className='h-16' src="logos/icons8-aws-logo (1).svg" />
            <img className='h-16' src="logos/icons8-mysql (1).svg" />
            <img className='h-16' src="logos/icons8-github-256.png" />
        </div>
      </div>
    </div>
  );
};

export default RightSide;