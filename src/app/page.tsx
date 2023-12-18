import React from 'react';
import Image from 'next/image';
import LanguageCard from './components/LanguageCard';

const Page: React.FC = () => {
  return (
    <div className="site flex flex-col min-h-screen bg-gradient-to-r from-fuchsia-500 to-slate-300 text-black">
      <header>
        <nav>
        <ul className="navbar flex flex-col sm:flex-row justify-between items-center m-6 bg-transparent">
          <div className='flex items-center'>
            <Image src="/letter-d.png" alt=" the letter d" width={50} height={50} />
          </div>

          <div className='flex flex-col sm:flex-row items-center'>
            <li><a href="/about" className="text-lg p-2">About</a></li>
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
                {"software engineer."}
              </span>
            </h1>
          </div>

          <div className='self-start mt-6 text-xl text-left max-w-4xl overflow-auto '>
            {"I'm someone who enjoys building things and learning new technologies. I'm currently a student at "}
            <span className='font-extrabold'>
              {"The Ohio State University "}
            </span>  
            {"studying Computer Science with a specialization in Software Engineering."}
          </div>

          <div className='flex flex-col items-center mt-24 justify-start'>
            <h1 className='text-4xl font-semibold mb-4 text-center'>{"Experience with the following technologies"}</h1>

            <div className='skills flex space-justify-between'>
              <LanguageCard language="Python" icon="/pythonlogo.png" />
              <LanguageCard language="TypeScript" icon="/typescriptlogo.png" />
              <LanguageCard language="Rust" icon="/rustlogo.png" />
            </div>
          </div>

          <div className='flex flex-col items-start mt-24'>
            <h1 className='text-5xl font-semibold mb-4'>{"Projects"}</h1>
            <p className='text-xl'>{"Project 1: Description of the project."}</p>
            <p className='text-xl'>{"Project 2: Description of the project."}</p>
            <p className='text-xl'>{"Project 3: Description of the project."}</p>
          </div>


        </div>
      </main>
      <footer className='m-8'>
        <button className='contact text-center text-3xl p-3 hover:text-xl'>Get in touch?</button>
      </footer>
    </div>
  );
}

export default Page;