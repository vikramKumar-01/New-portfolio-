import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project from "../data/project.json";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { left: -60%; }
    100% { left: 160%; }
  }

  .proj-card-fade {
    opacity: 0;
    animation: fadeUp 0.6s ease forwards;
  }

  .proj-btn-shine {
    position: relative; overflow: hidden;
  }
  .proj-btn-shine::before {
    content: '';
    position: absolute; top: 0; left: -60%;
    width: 40%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 2.4s ease-in-out infinite;
  }
`;

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const ProjectCard = ({ data, index }) => {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="proj-card-fade w-full sm:w-[90%] md:w-[45%] flex flex-col rounded-2xl overflow-hidden cursor-default transition-all duration-300 relative"
      style={{
        animationDelay: inView ? `${index * 0.12}s` : "9999s",
        animationPlayState: inView ? "running" : "paused",
        background: hovered ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)",
        border: `1px solid ${hovered ? "rgba(250,204,21,0.6)" : "rgba(250,204,21,0.25)"}`,
        boxShadow: hovered
          ? "5px 5px 18px rgba(101,175,10,0.45), 0 0 40px rgba(250,204,21,0.08)"
          : "2px 2px 8px rgba(0,0,0,0.5)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* corner ticks */}
      {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
        <span
          key={i}
          className={`absolute w-3 h-3 border-yellow-400 transition-opacity duration-300 ${cls}`}
          style={{ opacity: hovered ? 1 : 0 }}
        />
      ))}

      {/* image */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={data.imageSrc}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        {/* image overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)",
            opacity: hovered ? 1 : 0.6,
          }}
        />
        {/* index badge */}
        <div
          className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            background: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(250,204,21,0.5)",
            color: "#facc15",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "0.9rem",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3
          className="text-lg font-semibold text-white transition-colors duration-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: hovered ? "#facc15" : "#f9fafb",
          }}
        >
          {data.title}
        </h3>

        {/* divider */}
        <div
          className="h-px w-full transition-all duration-300"
          style={{
            background: `linear-gradient(to right, ${hovered ? "rgba(250,204,21,0.5)" : "rgba(255,255,255,0.08)"}, transparent)`,
          }}
        />

        <p
          className="text-sm leading-relaxed text-gray-400 flex-1"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          {data.description}
        </p>

        {/* tech tags — if available */}
        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider"
                style={{
                  background: "rgba(250,204,21,0.08)",
                  color: "#facc15",
                  border: "1px solid rgba(250,204,21,0.2)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* buttons */}
        <div className="flex gap-3 mt-1">
          <a
            href={data.demo}
            target="_blank"
            rel="noreferrer"
            className="proj-btn-shine flex-1 text-center py-2 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{
              background: "#2563eb",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              border: "1px solid rgba(96,165,250,0.3)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; }}
          >
            ↗ Live Demo
          </a>
          <a
            href={data.source}
            target="_blank"
            rel="noreferrer"
            className="proj-btn-shine flex-1 text-center py-2 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{
              background: "transparent",
              color: "#facc15",
              fontFamily: "'DM Sans', sans-serif",
              border: "1px solid rgba(250,204,21,0.45)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(250,204,21,0.12)";
              e.currentTarget.style.borderColor = "rgba(250,204,21,0.8)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(250,204,21,0.45)";
            }}
          >
            {"</>"}  Source
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <style>{STYLES}</style>

      <div className="min-h-screen text-white px-5 sm:px-6 py-16" id="project">
        <div className="max-w-5xl mx-auto">

          {/* heading — matches rest of portfolio */}
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2"
              data-aos="fade-right"
            >
              Projects
            </h1>
          </div>

          <p
            className="text-base sm:text-lg leading-relaxed mb-12 text-center text-gray-300"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            A selection of things I've built — from full-stack apps to UI experiments.
          </p>

          {/* cards */}
          <div className="flex flex-wrap gap-6 justify-center">
            {project.map((data, index) => (
              <ProjectCard key={data.id} data={data} index={index} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;