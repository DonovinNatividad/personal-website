import React from 'react';
import Image from 'next/image';
import LanguageCard from './components/LanguageCard';
import Badge from './components/Badge';
import Job from './components/Job';
import Project from './components/Project';
import { projectData, jobData } from '../../public/componentData';

const Page: React.FC = () => {
  return (
    <div className="site flex flex-col min-h-screen bg-gradient-to-r from-rose-500 to-slate-300 text-black">
      <header>
        <nav>
        <ul className="navbar flex flex-col sm:flex-row justify-end items-center m-6 bg-transparent">
          <div className='fixed top-0 left-0 m-4 flex flex-col space-y-4'>
            <a href="#">
              <Image src="/letter-d.png" alt=" the letter d" width={50} height={50} />
            </a>
            
            <a target='_blank' href="https://github.com/DonovinNatividad">
              <div className='flex items-center justify-center'>
                <Badge socialMediaName="Github" icon="/githubicon.png"></Badge>
              </div>
            </a>

            <a target='_blank' href="https://www.linkedin.com/in/donovinnatividad">
              <div className='flex items-center justify-center w-10 h-10 ml-1'>
                <Badge socialMediaName="LinkedIn" icon="/linkedin-logo.png"></Badge>
              </div>
            </a>
            
          </div>

          <div className='flex flex-col sm:flex-row items-center'>
            <li><a href="#experience" className='text-lg p-2'>Experience</a></li>
            <li><a target='_blank' href="/Website_Resume.pdf" className='text-lg p-2'>Resume</a></li>
            <li><a href="#projects" className="text-lg p-2">Projects</a></li>
            <li><a href="#contact" className="text-lg p-2">Contact</a></li>
          </div>
        </ul>
        </nav>
      </header>
      <main className="content flex-grow flex-col flex items-center justify-start container mx-auto px-4 align w-full max-w-6xl">
        <div className='text-container pl-12 pr-12 lg:pt-36 flex flex-col items-center justify-start'>
          <div className='flex flex-col-reverse lg:flex-row items-center'>  
            <div id='left' className='mt-8'>
              <div className='self-start'>
                <h1 className='text-5xl sm:text-5xl font-bold mb-2'>
                  {"Hi, my name's Donovin."}
                  <br />
                  {"I'm a "}
                  <span className='font-semibold text-black hover:text-lime-50 transition-colors duration-400'>
                    {"software engineer"}
                  </span>
                  {"."}
                </h1>
              </div>

              <div className='self-start mt-6 text-xl text-left max-w-4xl overflow-auto '>
                {"I'm someone who enjoys building things and learning new technologies. I'm currently a student at "}
                <span className='font-extrabold'>
                  The Ohio State University
                </span>  
                {" studying Computer Science with a specialization in Software Engineering. I'm very interested in AI and Machine Learning and how it can be used to improve our lives. I'm also interested in how we can use technology to improve the lives of people in developing countries. I worked at "}
                <span className='font-extrabold'>
                  {"JPMorgan Chase & Co. "}
                </span>  
                  {"as a "}
                  <span className='font-extrabold'>
                    {"Software Engineering Intern "}
                  </span> {"in the summer of 2024."}
              </div>
            </div>

            <div id="right" className="flex justify-center w-full sm:w-2/3 lg:w-1/2">
              <Image
                className='lg:ml-5 rounded-full'
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