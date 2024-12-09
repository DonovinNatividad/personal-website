import React from 'react';
import Image from 'next/image';
import LanguageCard from './components/LanguageCard';
import Badge from './components/Badge';
import Job from './components/Job';
import Project from './components/Project';
import { projectData } from '../../public/componentData';

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
            <li><a target='_blank' href="/DonovinNatividadResume.pdf" className='text-lg p-2'>Resume</a></li>
            <li><a href="#projects" className="text-lg p-2">Projects</a></li>
            <li><a href="#contact" className="text-lg p-2">Contact</a></li>
          </div>
        </ul>
        </nav>
      </header>
      <main className="content flex-grow flex-col flex items-center justify-start container mx-auto px-4 align w-full max-w-7xl">
        <div className='text-container p-36 flex flex-col items-center justify-start'>

          <div className='w-full'>
            <h1 className='text-6xl font-bold mb-2'>
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

          <div id="experience" className='flex flex-col items-start pt-36 w-full'>
            <h1 className='text-6xl font-semibold mb-6 text-center underline'>{"Experience"}</h1>
            <Job title="Software Engineering Intern · JPMorgan Chase & Co." date="JUNE 2024 - AUG 2024" description="I will be creating Full-Stack web applications that help to streamline the firm's business operations and gain experience creating quality software used for years to come." skills={['React', 'Typescript', 'FastAPI', 'AWS Fundamentals', 'Database Management']} />
            <Job title="CS Department Teaching Assistant · The Ohio State University" date="AUG 2023 - DEC 2023" description="Graded homeworks, giving feedback and corrections to students, and held office hours for students taking Foundations of Computer Science I at The Ohio State University for the fall semester. Graded concepts like asymptotic complexity, discrete structures, and graph theory." skills={['Teaching', 'Communication', 'Computer Science Fundamentals', ]} />
            <Job title="AI and Web Developer Intern · Emerge Inc." date="MAY 2023 - AUG 2023" description="Learned how to create full-stack web applications from the frontend, creating user interfaces, to the backend creating routes in flask, creating data in databases and pulling data to display. Used ChatGPT to create innovative and inspiring applications that utilized the power of generative AI to speed up company's workflow" skills={['Flask', 'HTML', 'CSS', 'Prompt Engineering', 'Database Management', 'Hosting']} />
          </div>

          <div id="projects">

          </div>

            <div className='flex flex-col items-start pt-36 w-full'>
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
      <footer id="contact" className='mb-16'>
      <a href="mailto:donovinnatividad@gmail.com" className='contact text-center text-3xl p-4 hover:text-4xl'>
        Need to contact me?
      </a>
      </footer>
    </div>
  );
}

export default Page;