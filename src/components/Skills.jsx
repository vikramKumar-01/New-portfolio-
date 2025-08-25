import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import skills from "../data/skills.json";

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="max-w-[900px] mx-auto py-10" id="skills">
            <div className="text-center mt-6">
                <h1 className="text-3xl font-bold mb-10 text-white border-b-4 border-blue-500 inline-block pb-2 ">Skills</h1>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
                {skills.map((data, index) => (
                    
                    <div
                        key={data.id}
                        className="w-full sm:w-[80%] md:w-[45%] bg-black rounded-4xl border p-6 flex flex-col items-center 
                                   border-yellow-400 shadow-[5px_5px_10px_rgba(101,175,10,0.5)] 
                                   hover:scale-105 transition-transform duration-300"
                        data-aos="flip-left"
                    >
                        <img
                            src={`/assets/${data.imageSrc}`}
                            alt="image"
                            className="w-20 h-20 mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-white text-center">
                            {data.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
