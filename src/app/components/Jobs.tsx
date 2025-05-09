import { jobData } from "../../../public/componentData";
import Job from "./Job";

const Jobs = () => {
    return (
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
    );
}

export default Jobs;