import React, { useEffect, useRef, useState, useTransition } from "react";
import Typed from "typed.js";
import pdf from "../pdf/vikramresume-1.pdf";
import hero from "../data/hero.json";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Formik",
  "Yup",
  "REST APIs",
  "Git",
  "GitHub"
];
const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/vikramKumar-01", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vikram-kr-chaurasiya-608901235/", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://x.com/VikramK52918201?t=CeoVnApT0Xns0DmwPIq6AA&s=09", label: "Twitter" },
    { icon: <FaEnvelope />, href: "mailto:bhartivikram633@gmail.com", label: "Email" },
];

const stats = [
    { value: "1+", label: "Years Learning" },
    { value: "6+", label: "Projects" },
    { value: "10+", label: "Technologies" },
];

const Home = () => {
    const typedRef = useRef(null);
    const [isPending, startTransition] = useTransition();
    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Full Stack Developer", "React Developer", "MERN Stack Developer", ],
            typeSpeed: 60,
            backSpeed: 35,
            loop: true,
            showCursor: false,
        });
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
            }, 1200);
        });
    };

    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-16"
        >
            {/* Aurora blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-700/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[420px] h-[420px] rounded-full bg-yellow-500/15 blur-[100px] pointer-events-none" />
            <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[90px] pointer-events-none" />

            {/* Dot-grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Main grid */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

                {/* LEFT */}
                <div className="flex flex-col gap-7" data-aos="fade-right" data-aos-duration="900">

                    {/* Status pill */}
                    <div className="flex items-center gap-2 w-fit">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <span className="text-xs font-medium text-green-400 tracking-widest uppercase">
                            Available for work
                        </span>
                    </div>

                    {/* Name */}
                    <div>
                        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400/80 mb-2">
                            Hello, I'm
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            Vikram Kr
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                                Chaurasiya
                            </span>
                        </h1>
                    </div>

                    {/* Typed role */}
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-yellow-400 rounded" />
                        <span className="text-base sm:text-lg text-slate-300 font-medium min-w-[220px]">
                            <span ref={typedRef} />
                            <span className="text-yellow-400 animate-pulse">|</span>
                        </span>
                    </div>

                    {/* Bio */}
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
                        I build responsive web applications using React.js and JavaScript. 
                        I focus on writing clean code and improving my skills in MERN stack development.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {skills.map((s) => (
                            <span
                                key={s}
                                className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full
                                    border border-white/10 bg-white/5 text-slate-300
                                    hover:border-yellow-400/50 hover:text-yellow-300 hover:bg-yellow-400/5
                                    transition-all duration-200 cursor-default"
                            >
                                {s}
                            </span>
                        ))}
                    </div>

                    {/* CTA row */}
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                        <button
                            onClick={handleDownload}
                            disabled={downloading}
                            className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                                bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900
                                hover:from-yellow-300 hover:to-amber-400
                                shadow-[0_4px_24px_rgba(234,179,8,0.3)]
                                transition-all duration-300
                                ${downloading ? "opacity-60 cursor-not-allowed" : "hover:shadow-[0_4px_32px_rgba(234,179,8,0.5)]"}`}
                        >
                            {downloading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                                    Downloading...
                                </>
                            ) : (
                                <>
                                    <HiDownload className="text-base group-hover:translate-y-0.5 transition-transform duration-200" />
                                    Download Resume
                                </>
                            )}
                        </button>

                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10
                                        bg-white/5 text-slate-400
                                        hover:border-yellow-400/50 hover:text-yellow-400 hover:bg-yellow-400/5
                                        transition-all duration-200 text-base"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div
                    className="flex flex-col items-center gap-8"
                    data-aos="fade-left"
                    data-aos-duration="900"
                >
                    {/* Profile card with glassmorphism */}
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute -inset-[3px] rounded-[28px] bg-gradient-to-br from-yellow-400/60 via-amber-500/30 to-transparent blur-sm" />

                        {/* Glass card */}
                        <div className="relative rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md p-3 shadow-2xl">
                            <img
                                src={`/assets/${hero.imgSrc}`}
                                alt="Vikram Kr Chaurasiya"
                                className="w-[260px] h-[340px] sm:w-[300px] sm:h-[380px] rounded-[18px] object-cover object-top"
                            />

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2
                                px-4 py-2 rounded-full border border-yellow-400/40
                                bg-[#0f1130]/80 backdrop-blur-sm
                                flex items-center gap-2 shadow-lg whitespace-nowrap"
                            >
                                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                <span className="text-xs font-semibold text-yellow-400 tracking-wider">
                                    Open to Opportunities
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 mt-4">
                        {stats.map(({ value, label }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center px-5 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm min-w-[80px]"
                            >
                                <span className="text-2xl font-extrabold text-yellow-400">{value}</span>
                                <span className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wider">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
                <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500">Scroll</span>
                <div className="w-[1.5px] h-10 bg-gradient-to-b from-yellow-400/60 to-transparent rounded animate-pulse" />
            </div>
        </section>
    );
};

export default Home;