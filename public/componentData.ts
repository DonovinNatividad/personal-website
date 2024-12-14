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

interface JobData {
    title: string;
    date: string;
    description: string;
    skills: string[];
}

export const jobData: JobData[] = [
    {
        title: "Software Engineering Intern at JPMorgan Chase & Co.",
        date: "JUNE 2024 - AUG 2024",
        description: "I will be creating Full-Stack web applications that help to streamline the firm's business operations and gain experience creating quality software used for years to come.",
        skills: ["React", "Typescript", "FastAPI", "AWS Fundamentals", "Database Management"]
    },
    {
        title: "Teaching Assistant at The Ohio State University",
        date: "AUG 2023 - DEC 2023",
        description: "Graded homeworks, giving feedback and corrections to students, and held office hours for students taking Foundations of Computer Science I at The Ohio State University for the fall semester. Graded concepts like asymptotic complexity, discrete structures, and graph theory.",
        skills: ["Teaching", "Communication", "Computer Science Fundamentals"]
    },
    {
        title: "AI and Web Developer Intern at Emerge Inc.",
        date: "MAY 2023 - AUG 2023",
        description: "Learned how to create full-stack web applications from the frontend, creating user interfaces, to the backend creating routes in flask, creating data in databases and pulling data to display. Used ChatGPT to create innovative and inspiring applications that utilized the power of generative AI to speed up company's workflow.",
        skills: ["Flask", "HTML", "CSS", "Prompt Engineering", "Database Management", "Hosting"]
    }
];