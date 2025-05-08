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
        date: "June 2024 - August 2024",
        description: "I contributed to an internal web application that helped to streamline the firm's business operations. Additionally, I participated in a global hackathon where I placed in the top 10 out of 200 teams.",
        skills: ["React", "Typescript", "FastAPI", "AWS Fundamentals", "Database Management"]
    },
    {
        title: "Teaching Assistant at The Ohio State University",
        date: "August 2023 - December 2023",
        description: "Graded homeworks, giving feedback and corrections to students, and held office hours for students taking Foundations of Computer Science I at The Ohio State University for the fall semester. Graded concepts like asymptotic complexity, discrete structures, and graph theory.",
        skills: ["Teaching", "Communication", "Computer Science Fundamentals"]
    },
    {
        title: "AI and Web Developer Intern at Emerge Inc.",
        date: "May 2023 - August 2023",
        description: "Learned how to create full-stack web applications from the frontend, creating user interfaces, to the backend creating routes in flask, creating data in databases and pulling data to display. Used ChatGPT to create innovative and inspiring applications that utilized the power of generative AI to speed up company's workflow.",
        skills: ["Flask", "HTML", "CSS", "Prompt Engineering", "Database Management", "Hosting"]
    },
    {
        title: "Peer Leader at The Ohio State University",
        date: "April 2022 - April 2023",
        description: "During my sophomore year, I served as a peer mentor to over 300 first-year students. I began by leading campus tours, delivering speeches about the university, and helping them understand what to expect as new college students. Throughout the academic year, I continued to check in with them regularly, offering support as they adjusted to college life. I connected students with helpful resources and shared personal advice to help them succeed both academically and personally during their freshman year.",
        skills: ["Salesforce", "Leadership", "Communication", "Resourcefulness"]
    }
];