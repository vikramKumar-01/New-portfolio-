import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const experiences = [
 {
    id: "01",
    role: "Frontend Developer Intern",
    org: "Jaiwebsoft Technologies",
    period: "Aug 2025 — Oct 2025",
    tag: "Work",
    desc: "Working as a Frontend Developer, building responsive and user-friendly web interfaces using React.js, JavaScript, and Bootstrap. Implemented form handling and validation using Formik and Yup, fixed UI/UX issues, optimized performance, and improved overall user experience across applications.",
    skills: ["React.js", "JavaScript", "Bootstrap", "Formik", "Yup"],
    accent: "#3b82f6",
  },
 {
    id: "02",
    role: "Frontend Developer",
    org: "Jaiwebsoft Technologies",
    period: "Oct 2025 — Present",
    tag: "Work",
    desc: "Working as a Frontend Developer, building responsive and user-friendly web interfaces using React.js, JavaScript, and Bootstrap. Implemented form handling and validation using Formik and Yup, fixed UI/UX issues, optimized performance, and improved overall user experience across applications.",
    skills: ["React.js", "JavaScript", "Bootstrap", "Formik", "Yup"],
    accent: "#3b82f6",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const Card = ({ exp, index }) => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
      className="relative flex gap-5 md:gap-8"
    >
      {/* number + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-all duration-300"
          style={{
            background: hovered ? exp.accent : "transparent",
            border: `2px solid ${exp.accent}`,
            color: hovered ? "#111827" : exp.accent,
            boxShadow: hovered ? `0 0 16px ${exp.accent}99` : "none",
          }}
        >
          {exp.id}
        </div>
        {index < experiences.length - 1 && (
          <div
            className="w-px flex-1 mt-1"
            style={{
              minHeight: 52,
              background: `linear-gradient(to bottom, ${exp.accent}66, transparent)`,
            }}
          />
        )}
      </div>

      {/* card — bg-base-300 style like About's timeline boxes */}
      <div
        className="flex-1 mb-10 rounded-xl p-6 relative overflow-hidden cursor-default transition-all duration-300 bg-base-300 border border-yellow-400"
        style={{
          boxShadow: hovered ? "5px 5px 10px rgba(101,175,10,0.5)" : "none",
          transform: hovered ? "scale(1.02)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-blue-300 font-semibold text-xl leading-tight">
              {exp.role}
            </h3>
            <p className="text-lg text-gray-300 mt-0.5">{exp.org}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span
              className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold"
              style={{
                background: exp.accent + "22",
                color: exp.accent,
                border: `1px solid ${exp.accent}55`,
              }}
            >
              {exp.tag}
            </span>
            <span className="text-sm text-gray-400">{exp.period}</span>
          </div>
        </div>

        {/* divider */}
        <div
          className="h-px w-full mb-4"
          style={{
            background: `linear-gradient(to right, ${exp.accent}55, transparent)`,
          }}
        />

        {/* desc */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.desc}</p>

        {/* chips */}
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-md bg-gray-700 text-gray-300 border border-gray-600"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen text-white px-5 sm:px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* heading — same pattern as About */}
        <div className="text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2"
            data-aos="fade-right"
          >
            Experience
          </h1>
        </div>

        <p
          className="text-base sm:text-lg leading-relaxed mb-12 text-center text-gray-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My professional journey and hands-on experience building real-world applications.
        </p>

        {/* timeline cards */}
        <div data-aos="fade-up" data-aos-delay="150">
          {experiences.map((exp, i) => (
            <Card key={exp.id} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;