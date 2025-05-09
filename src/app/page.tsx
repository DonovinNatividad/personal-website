import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Jobs from './components/Jobs';
import Hero from './components/Hero';

// TODO:
           {/* Add little button for easily going back up to the top of webpage */}
          {/* Add animations to HTML elements like text animation*/}
          {/* Lean into more icons specifically for Experience section */}
          {/* Improve projects section by spreading out the cards better so users can see multiple at one time side by side, updating the projects that are being shown, redoing the structure might be better */}
          {/* Improve need to contact me section with form so user's can easily do it */}
          {/* Change color gradient background */}
          {/* Add night and day mode with animation */}
          {/* Add an interests section for employers to view to get a sense of who I am */}
          {/* remove blog from projects section along with my website and add Labyrinth and something else like an AI project or Computer vision project to look better*/}
          {/* Pick out a better profile picture of myself to look better */}
          {/* Change the font of the website as I think it could be better */}
          {/* Use Coolors to pick out new color palette to make website look great */}
          {/* SVGRepo for icons */}
          {/* Add custom highlighted text color */}
          {/* Add better footer to my website */}

const Page: React.FC = () => {
  return (
    <div id='top' className="site flex flex-col min-h-screen bg-gradient-to-r from-rose-500 to-slate-300 text-black">
      <Navbar />
      
      <main className="content flex-grow flex-col flex items-center justify-start container mx-auto pt-16 md:pt-0 md:px-4 align sm:max-w-min md:w-full lg:max-w-7xl">
        <Hero />
        <Jobs />
        <Projects />
      </main>

      <footer id="contact" className='mt-16 mb-32'>
        <a href="mailto:donovinnatividad@gmail.com" className='contact text-center text-4xl p-4'>
          Contact me
        </a>
      </footer>
    </div>
  );
}

export default Page;