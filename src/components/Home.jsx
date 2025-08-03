import React, { useEffect, useRef, useState, useTransition } from "react";
import Typed from "typed.js";
import pdf from "../pdf/vikramresume-1.pdf";
import hero from "../data/hero.json";

const Home = () => {
    const typedRef = useRef(null);
    const [isPending, startTransition] = useTransition();
    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        const options = {
            strings: [
                "Welcome to my profile",
                "My Name is VIKRAM KR CHAURASIYA",
                "I'm full stack developer",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        };

        const typed = new Typed(typedRef.current, options);
        return () => typed.destroy();
    }, []);

    const handleDownload = () => {
        startTransition(() => {
            setDownloading(true);
            setTimeout(() => {
                const link = document.createElement("a");
                link.href = pdf;
                link.download = "vikramresume-1";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setDownloading(false);
            }, 1000);
        });
    };

    return (
        <section
            id="home"
            className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 py-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl">

                {/* Left Text Section */}
                <div
                    className="flex-1 flex flex-col justify-center items-center text-center 
            bg-[rgb(40,47,97)] rounded-lg border-2 border-yellow-400 
            shadow-[5px_5px_10px_rgba(101,175,10,0.5)] p-6"
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
                        <span ref={typedRef}></span>
                        <span className="text-yellow-400 animate-pulse ml-1">|</span>
                    </h1>

                    <button
                        onClick={handleDownload}
                        disabled={downloading}
                        className={`inline-block mt-6 px-6 py-2 border-2 border-yellow-500 text-yellow-500 
                        hover:bg-yellow-500 hover:text-white transition duration-300 rounded-lg text-sm md:text-base
                        ${downloading ? "opacity-50 cursor-not-allowed" : "animate-bounce"}`}
                    >
                        {downloading ? "Downloading..." : "Download Resume"}
                    </button>
                </div>

                {/* Right Image Section */}
                <div
                    className="flex-1 flex justify-center items-center"
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                >
                    <img
                        src={`/assets/${hero.imgSrc}`}
                        alt="hero"
                        className="w-[300px] sm:w-[300px] h-[300px] sm:h-[300px] rounded-2xl 
              border-2 border-amber-400 shadow-lg animate-superman"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
