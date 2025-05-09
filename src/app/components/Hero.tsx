import Image from 'next/image';

const Hero = () => {
    return (
        <div className="text-container pl-14 pr-14 lg:pt-16 flex flex-col items-center justify-start">
            <div className="flex flex-col-reverse lg:flex-row items-center">
            
                {/* Left Section */}
                <div id="left" className="mt-8 lg:w-4/7">
                    <div className="self-start">
                        <h1 className="text-5xl lg:text-4xl font-bold mb-2">
                            {"Hi, I'm Donovin,"}
                            <br />
                            {"a Software Engineer "}
                            <span className="font-semibold text-black hover:text-lime-50 transition-colors duration-400">
                            {"creating impactful solutions"}
                            </span>
                            {"."}
                        </h1>
                    </div>
                    <div className="self-start mt-6 text-xl text-left max-w-4xl overflow-auto">
                        {"I'm a lifelong learner and builder passionate about using technology to solve real-world problems. I am a Computer Science Graduate from "}
                        <span className="font-extrabold">
                            The Ohio State University
                        </span>
                        {" specializing in Software Engineering. I love learning about new programming technologies and building out side-projects. During my 2024 "}
                        <span className="font-extrabold">
                            Software Engineering Internship
                        </span>
                        {" at "}
                        <span className="font-extrabold">
                            JPMorgan Chase & Co.
                        </span>
                        {", I had the pleasure of working on an internal video-sharing platform where I created RESTful APIs, Front-end components in React, and learned about cloud technologies like AWS, earning my Certified Cloud Practitioner certification."}
                    </div>
                </div>

                {/* Right Section */}
                <div id="right" className="flex justify-center w-full mt-10 md:mt-0 sm:w-2/3 lg:ml-5 lg:w-3/7">
                    <Image
                        className="rounded-full"
                        src="/DonovinNatividad.png"
                        width={100}
                        height={100}
                        layout="responsive"
                        quality={100}
                        alt="Picture of Donovin Natividad"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;