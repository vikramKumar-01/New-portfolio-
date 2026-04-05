import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

  .about-fade { opacity: 0; animation: fadeUp 0.6s ease forwards; }
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

const education = [
  {
    id: "01",
    degree: "10th Standard",
    grade: "75%",
    school: "B K D Zila High School Laheriasarai Darbhanga",
    board: "Bihar School Examination Board",
    year: "2020",
    accent: "#facc15",
  },
  {
    id: "02",
    degree: "Intermediate of Science (ISC)",
    grade: "60%",
    school: "Marwari College Darbhanga",
    board: "Bihar School Examination Board",
    year: "2020 – 2022",
    accent: "#4ade80",
  },
  {
    id: "03",
    degree: "Bachelor of Computer Applications (BCA)",
    grade: "77%",
    school: "L.S. College Muzaffarpur",
    board: "Babasaheb Bhimrao Ambedkar Bihar University",
    year: "2022 – 2025",
    accent: "#38bdf8",
  },
  {
    id: "04",
    degree: "Master of Computer Applications (MCA)",
    grade: "Pursuing",
    school: "Vivekananda Global University, Jaipur",
    board: "Rajasthan",
    year: "2025 – 2027",
    accent: "#f472b6",
  },
];

const aboutPoints = [
  {
    emoji: "👋",
    text: (
      <>
        Hi, I’m <span className="text-blue-400 font-semibold">Vikram</span> — a{" "}
        <strong>Frontend Developer</strong> with hands-on experience building 
        responsive and user-friendly web applications. I’ve worked on real-world 
        projects where I focused on creating clean, efficient UI and delivering 
        a smooth user experience.
      </>
    ),
  },
  {
    emoji: "⚡",
    text: (
      <>
        I mainly work with{" "}
        <span className="text-blue-400 font-medium">React.js, JavaScript, and Bootstrap</span>, 
        and I’m also comfortable with the <strong>MERN stack</strong> 
        (MongoDB, Express.js, Node.js).
      </>
    ),
  },
  {
    emoji: "🛠️",
    text: (
      <>
        Along with this, I have a strong foundation in <strong>C, Core Java, SQL</strong>, 
        and version control tools like <strong>Git and GitHub</strong>.
      </>
    ),
  },
  {
    emoji: "🎓",
    text: (
      <>
        I completed my <strong>BCA</strong> and am currently pursuing{" "}
        <strong>MCA from VGU Jaipur</strong>, while continuously improving my 
        practical development skills.
      </>
    ),
  },
  {
    emoji: "☁️",
    text: (
      <>
        Recently, I’ve also started exploring <strong>AWS</strong> to expand my 
        knowledge beyond frontend development.
      </>
    ),
  },
  {
    emoji: "🚀",
    text: (
      <>
        I enjoy solving problems through code and building applications that are 
        both functional and user-friendly. I’m always open to new challenges and 
        opportunities where I can contribute, learn, and grow as a developer.
      </>
    ),
  },
];

/* Education card */
const EduCard = ({ edu, index }) => {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="relative flex gap-5 md:gap-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      {/* number + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-all duration-300"
          style={{
            background: hovered ? edu.accent : "transparent",
            border: `2px solid ${edu.accent}`,
            color: hovered ? "#111827" : edu.accent,
            boxShadow: hovered ? `0 0 16px ${edu.accent}99` : "none",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1rem",
          }}
        >
          {edu.id}
        </div>
        {index < education.length - 1 && (
          <div
            className="w-px flex-1 mt-1"
            style={{
              minHeight: 52,
              background: `linear-gradient(to bottom, ${edu.accent}66, transparent)`,
            }}
          />
        )}
      </div>

      {/* card */}
      <div
        className="flex-1 mb-10 rounded-xl p-5 relative overflow-hidden cursor-default transition-all duration-300 bg-base-300 border border-yellow-400"
        style={{
          boxShadow: hovered ? "5px 5px 10px rgba(101,175,10,0.5)" : "none",
          transform: hovered ? "scale(1.02)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* corner ticks */}
        {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
          <span
            key={i}
            className={`absolute w-3 h-3 transition-opacity duration-300 border-yellow-400 ${cls}`}
            style={{ opacity: hovered ? 1 : 0 }}
          />
        ))}

        {/* glow */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
          style={{ background: edu.accent, opacity: hovered ? 0.07 : 0 }}
        />

        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-blue-300 font-semibold text-xl leading-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {edu.degree}
          </h3>
          <span
            className="text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0"
            style={{
              background: edu.accent + "22",
              color: edu.accent,
              border: `1px solid ${edu.accent}55`,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {edu.grade}
          </span>
        </div>

        <div
          className="h-px w-full mb-3"
          style={{ background: `linear-gradient(to right, ${edu.accent}44, transparent)` }}
        />

        <p className="text-gray-300 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {edu.school}
        </p>
        <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
          {edu.board} &nbsp;·&nbsp; {edu.year}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <style>{STYLES}</style>

      <div className="min-h-screen text-white px-5 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">

          {/* ── About Me heading ── */}
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2"
              data-aos="fade-right"
            >
              About Me
            </h1>
          </div>

          {/* ── About points ── */}
          <div className="space-y-4 mb-16">
            {aboutPoints.map((pt, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl p-4 transition-all duration-300 bg-base-300 border border-yellow-400 hover:shadow-[5px_5px_10px_rgba(101,175,10,0.5)] hover:scale-[1.01]"
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{pt.emoji}</span>
                <p
                  className="text-base sm:text-lg leading-relaxed text-gray-300"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {pt.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── Education heading ── */}
          <div className="text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mt-4 mb-10 border-b-4 border-green-400 inline-block pb-2"
              data-aos="fade-right"
            >
              🎓 My Education
            </h2>
          </div>

          {/* ── Education timeline ── */}
          <div data-aos="fade-up" data-aos-delay="100">
            {education.map((edu, i) => (
              <EduCard key={edu.id} edu={edu} index={i} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default About;