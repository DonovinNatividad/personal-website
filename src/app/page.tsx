import React from 'react';
import Image from 'next/image';
import LanguageCard from './components/LanguageCard';
import Badge from './components/Badge';
import Navbar from './components/Navbar';
import Job from './components/Job';
import Project from './components/Project';
import { projectData, jobData } from '../../public/componentData';

const Page: React.FC = () => {
  return (
    <div id='top' className="site flex flex-col min-h-screen bg-gradient-to-r from-rose-500 to-slate-300 text-black">
      <Navbar/>
      <main className="content flex-grow flex-col flex items-center justify-start container mx-auto pt-16 md:pt-0 md:px-4 align sm:max-w-min md:w-full lg:max-w-7xl">
        <div className='text-container pl-14 pr-14 lg:pt-16 flex flex-col items-center justify-start'>
          <div className='flex flex-col-reverse lg:flex-row items-center'>  
            <div id='left' className='mt-8 lg:w-4/7'>
              <div className='self-start'>
                <h1 className='text-5xl lg:text-4xl font-bold mb-2'>
                  {"Hi, I'm Donovin,"}
                  <br />
                  {"a Software Engineer "}
                  <span className='font-semibold text-black hover:text-lime-50 transition-colors duration-400'>
                    {"creating impactful solutions"}
                  </span>
                  {"."}
                </h1>
              </div>

              <div className='self-start mt-6 text-xl text-left max-w-4xl overflow-auto'>
              {"I'm a lifelong learner and builder passionate about using technology to solve real-world problems. I am a Computer Science Graduate from "}
              <span className='font-extrabold'>
                The Ohio State University
              </span>
              {" specializing in Software Engineering. I love learning about new programming technologies and building out side-projects. During my 2024 "}
              <span className='font-extrabold'>
                Software Engineering Internship
              </span>
              {" at "}
              <span className='font-extrabold'>
                JPMorgan Chase & Co.
              </span>
              {", I had the pleasure of working on an internal video-sharing platform where I created RESTful APIs, Front-end components in React, and learned about cloud technologies like AWS, earning my Certified Cloud Practitioner certification."}
            </div>

          </div>


            <div id="right" className="flex justify-center w-full mt-10 md:mt-0 sm:w-2/3 lg:ml-5 lg:w-3/7">
              <Image
                className=' rounded-full'
                src='/DonovinNatividad.png'
                width={100}
                height={100}
                layout='responsive'
                quality={100}
                alt='Picture of Donovin Natividad'
              />
            </div>
          </div>
          

          <div id="experience" className='flex flex-col items-center pt-36 w-full'>
            <h1 className='text-6xl font-semibold mb-6 text-center underline'>{"Experience"}</h1>
            {
              jobData.map((job) => (
                <Job
                  key={job.title}
                  title={job.title}
                  date={job.date}
                  description={job.description}
                  skills={job.skills}
                />
              ))
            }
          </div>

          {/* Add section for Hackathon wins! */}
          {/* Add little button for easily going back up to the top of webpage */}
          {/* Add animations to HTML elements like text animation*/}
          {/* Lean into more icons specifically for Experience section */}
          {/* Add skills section for technologies I am familiar with adding years of experience for each language, etc */}
          {/* Improve projects section by spreading out the cards better so users can see multiple at one time side by side, updating the projects that are being shown, redoing the structure might be better */}
          {/* Improve need to contact me section with form so user's can easily do it */}
          {/* Change color gradient background */}
          {/* Add night and day mode with animation */}
          {/* Add page for books I've read */}
          {/* Add an interests section for employers to view to get a sense of who I am */}
          {/* remove blog from projects section along with my website and add Labyrinth and something else like an AI project or Computer vision project to look better*/}
          {/* Add blog to nav bar as link element <a> */}
          {/* Create a Linktree for all of my socials */}
          {/* Pick out a better profile picture of myself to look better */}
          

          <div id="projects"></div>
            <div className='flex flex-col items-center pt-36 w-full'>
              <h1 className='text-6xl font-semibold mb-6 text-center underline'>{"Projects"}</h1>
              <div className='flex flex-col space-y-4 items-center w-full'>
                {projectData.map((project) => (
                  <Project 
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    githubLink={project.githubLink}
                  />
                ))}
              </div>
            </div>
        </div>
      </main>
      <footer id="contact" className='mt-16 mb-16'>
        <a href="mailto:donovinnatividad@gmail.com" className='contact text-center text-3xl p-4 hover:text-4xl'>
          Need to contact me?
        </a>
      </footer>
    </div>
  );
}

export default Page;