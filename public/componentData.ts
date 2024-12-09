interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubLink: string;
}

export const projectData: ProjectData[] = [
    { 
        title: "Rust File Scraper", description: "A command-line application developed in Rust that scrapes a file, finds instances of the input string, and returns it via the terminal.", technologies: ['Rust'], image: "/rustlogo.png", githubLink: "https://github.com/DonovinNatividad/mini-grep" 
    },

    {
        title: "Personal Website", 
        description: "A fun project I did to gain better experience in making frontend UIs and designing websites. Developed using Next.js, TypeScript, Tailwind CSS, and React.", 
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'], 
        image: "/portfolioimg.JPG", 
        githubLink: "https://github.com/DonovinNatividad/personal-website"
    },

    {
        title: "Personal Blog", 
        description: "A beautiful static website where I post blogs about topics I find interesting. It's developed using Astro and React. The site is currently deployed, and I'm working on creating content for it.", 
        technologies:['Astro', 'React'],
        image:"/blogimg.JPG", 
        githubLink: "https://donovinnatividad.github.io/personal-blog/"
    }
];