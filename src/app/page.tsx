import React from 'react';
import Image from 'next/image';
import LanguageCard from './components/LanguageCard';
import Badge from './components/Badge';
import Job from './components/Job';

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
            
            <a href="https://github.com/DonovinNatividad">
              <div className='flex items-center justify-center'>
                <Badge socialMediaName="Github" icon="/githubicon.png"></Badge>
              </div>
            </a>

            {/* <a href="https://www.linkedin.com/in/donovin-natividad/">
              <div className='flex items-center justify-center w-8 h-8 ml-2'>
                <Badge socialMediaName="LinkedIn" icon="/linkedinlogo.png"></Badge>
              </div>
            </a> */}
            
          </div>

          <div className='flex flex-col sm:flex-row items-center'>
            <li><a href="#experience" className='text-lg p-2'>Experience</a></li>
            <li><a href="/projects" className="text-lg p-2">Projects</a></li>
            <li><a href="/contact" className="text-lg p-2">Contact</a></li>
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
              {"The Ohio State University "}
            </span>  
            {"studying Computer Science with a specialization in Software Engineering. I'm very interested in AI and Machine Learning and how it can be used to improve the lives of people. I'm also interested in how we can use technology to improve the lives of people in developing countries. I'll be working at "}
            <span className='font-extrabold'>
              {"JP Morgan Chase & Co. "}
            </span>  
              {"as a "}
              <span className='font-extrabold'>
                {"Software Engineering Intern "}
              </span> {"in the summer of 2024."}
          </div>

          {/* <div className='flex flex-col items-center mt-24 justify-start'>
            <h1 className='text-4xl font-semibold mb-4 text-center'>{"Experience with the following technologies"}</h1>

            <div className='skills flex space-justify-between'>
              <LanguageCard language="Python" icon="/pythonlogo.png" />
              <LanguageCard language="TypeScript" icon="/typescriptlogo.png" />
              <LanguageCard language="Rust" icon="/rustlogo.png" />
            </div>
          </div> */}
          <div></div>

          <div id="experience" className='flex flex-col items-start pt-48 w-full'>
            <h1 className='text-6xl font-semibold mb-6 text-center underline'>{"Experience"}</h1>
            <Job title="Software Engineering Intern · JP Morgan Chase & Co." date="JUNE 2024 - AUG 2024" description="I will be creating Full-Stack web applications that help to streamline the firm's business operations and gain experience creating quality software used for years to come." skills={['Typescript ', 'Database Management']} />
            <Job title="CS Department Teaching Assistant · The Ohio State University" date="AUG 2023 - DEC 2023" description="Graded homeworks, giving feedback and corrections to students, and held office hours for students taking Foundations of Computer Science I at The Ohio State University for the fall semester. Graded concepts like asymptotic complexity, discrete structures, and graph theory." skills={['Teaching', 'Communication', 'Computer Science Fundamentals', ]} />
            <Job title="AI and Web Developer Intern · Emerge Inc." date="MAY 2023 - AUG 2023" description="Learned how to create full-stack web applications from the frontend, creating user interfaces, to the backend creating routes in flask, creating data in databases and pulling data to display. Used ChatGPT to create innovative and inspiring applications that utilized the power of generative AI to speed up company's workflow" skills={['Flask', 'HTML', 'CSS', 'Prompt Engineering', 'Database Management', 'Hosting']} />
          </div>


        </div>
      </main>
      <footer className='m-8'>
      <a href="mailto:Natividad.10@osu.edu" className='contact text-center text-3xl p-3 hover:text-xl'>
        Need to contact me?
      </a>
      </footer>
    </div>
  );
}

export default Page;