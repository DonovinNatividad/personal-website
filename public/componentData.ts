interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubLink: string;
}

export const projectData: ProjectData[] = [
    { title: "Rust File Scraper", description: "A command-line application developed in Rust that scrapes a file, finds instances of the input string, and returns it via the terminal.", technologies: ['Rust'], image: "/rustlogo.png", githubLink: "https://github.com/DonovinNatividad/mini-grep" },
];