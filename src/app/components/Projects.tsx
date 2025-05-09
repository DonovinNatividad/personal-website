import { projectData} from '../../../public/componentData';
import Grid from '@mui/material/Grid';
import Project from '../components/Project';

const Projects = () => {
    return (
        <div id="projects">
            <div className='flex flex-col items-center mt-36 mb-36 w-full'>
                <h1 className='text-6xl font-semibold mb-14 text-center underline'>{"Projects"}</h1>
                <div className='flex flex-col space-y-4 items-center w-full'>
                <Grid container spacing={1}>
                    {projectData.map((project) => (
                        <Grid size={4} key={project.title}>
                            <Project 
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                image={project.image}
                                githubLink={project.githubLink}
                            />
                        </Grid>
                    ))}
                </Grid>
                </div>
            </div>
        </div>
    );
}

export default Projects;