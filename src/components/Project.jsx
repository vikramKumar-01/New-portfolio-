import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project from "../data/project.json";

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="max-w-[900px] mx-auto px-4 py-10" id="projects">
            <h1 className="text-3xl font-bold mb-10 text-white text-center">PROJECTS</h1>

            <div className="flex flex-wrap gap-8 justify-center">
                {project.map((data) => (
                    <div
                        key={data.id}
                        className="w-full sm:w-[90%] md:w-[45%] bg-black text-white rounded-3xl p-5 border border-yellow-400 shadow-[5px_5px_10px_rgba(101,175,10,0.5)] hover:scale-105 transition-transform duration-300"
                        data-aos="flip-right"
                    >
                        <div className="flex justify-center mb-4">
                            <img
                                src={data.imageSrc}
                                alt="project"
                                className="w-[250px] h-[200px] object-cover border-2 border-yellow-400 rounded-xl"
                            />
                        </div>

                        <div className="text-center space-y-2">
                            <h3 className="text-xl font-semibold">{data.title}</h3>
                            <p className="text-sm">{data.description}</p>
                            <div className="flex justify-center gap-4 mt-4">
                                <a
                                    href={data.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                                >
                                    Demo
                                </a>
                                <a
                                    href={data.source}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium transition"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
