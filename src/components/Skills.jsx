import { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import skills from "../data/skills.json";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes floatIcon {
    0%, 100% { transform: translateY(0px);   }
    50%       { transform: translateY(-6px);  }
  }
  @keyframes fillBar {
    from { width: 0%; }
    to   { width: var(--fill); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  .skill-icon-float { animation: floatIcon 3s ease-in-out infinite; }

  .skill-bar-fill {
    height: 3px;
    border-radius: 9999px;
    width: 0%;
    animation: fillBar 1s ease forwards;
  }

  .skill-card-fade {
    opacity: 0;
    animation: fadeUp 0.5s ease forwards;
  }
`;

/* Skill level 1-5 → width % and label */
const LEVEL_MAP = {
  5: { pct: "95%", label: "Expert"      },
  4: { pct: "78%", label: "Advanced"    },
  3: { pct: "60%", label: "Proficient"  },
  2: { pct: "42%", label: "Familiar"    },
  1: { pct: "25%", label: "Learning"    },
};

/* Assign a level to each skill by title (fallback 3) */
const SKILL_LEVELS = {
  "React.js": 5, "JavaScript": 5, "HTML": 5, "CSS": 5,
  "Node.js": 4, "Express.js": 4, "MongoDB": 4, "PostgreSQL":3, "Tailwind CSS": 4,
  "Git": 4, "GitHub": 4, "Bootstrap": 4,
  "Python": 3, "REST API": 3, "Redux": 3, "Formik": 3,
  "TypeScript": 2, "Docker": 2, "AWS": 2,
};

/* Category groupings */
const CATEGORIES = [
  { label: "Frontend",  color: "#facc15", keys: ["React.js","JavaScript","HTML","CSS","Tailwind CSS","Bootstrap","Redux","TypeScript","Formik"] },
  { label: "Backend",   color: "#4ade80", keys: ["Node.js","Express.js","REST API","Python"] },
  { label: "Database",  color: "#38bdf8", keys: ["MongoDB","PostgreSQL"] },
  { label: "DevOps",    color: "#f472b6", keys: ["Git","GitHub","Docker","AWS"] },
];

function useInView(threshold = 0.15) {
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

/* Single skill pill */
const SkillPill = ({ data, color, delay }) => {
  const [ref, inView] = useInView(0.05);
  const [hovered, setHovered] = useState(false);
  const level = SKILL_LEVELS[data.title] ?? 3;
  const { pct, label } = LEVEL_MAP[level];

  return (
    <div
      ref={ref}
      className="skill-card-fade flex items-center gap-3 rounded-xl px-4 py-3 cursor-default transition-all duration-300 relative overflow-hidden"
      style={{
        animationDelay: inView ? `${delay}s` : "9999s",
        animationPlayState: inView ? "running" : "paused",
        background: hovered ? `${color}10` : "rgba(0,0,0,0.28)",
        border: `1px solid ${hovered ? color + "66" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 4px 20px ${color}22` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* icon */}
      <div
        className={hovered ? "skill-icon-float" : ""}
        style={{ flexShrink: 0 }}
      >
        <img
          src={`/assets/${data.imageSrc}`}
          alt={data.title}
          className="w-9 h-9 object-contain"
          style={{
            filter: hovered ? `drop-shadow(0 0 6px ${color}cc)` : "grayscale(30%)",
            transition: "filter 0.3s",
          }}
        />
      </div>

      {/* text + bar */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="text-sm font-medium truncate"
            style={{
              color: hovered ? color : "#e5e7eb",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.3s",
            }}
          >
            {data.title}
          </span>
          <span
            className="text-[10px] ml-2 flex-shrink-0"
            style={{
              color: hovered ? color : "#6b7280",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.3s",
            }}
          >
            {label}
          </span>
        </div>

        {/* progress bar track */}
        <div className="w-full h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
          <div
            className="skill-bar-fill"
            style={{
              "--fill": pct,
              background: `linear-gradient(to right, ${color}, ${color}88)`,
              animationDelay: inView ? `${delay + 0.2}s` : "9999s",
              animationPlayState: inView ? "running" : "paused",
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* Category block */
const CategoryBlock = ({ cat, allSkills, blockIndex }) => {
  const [ref, inView] = useInView(0.1);

  const catSkills = allSkills.filter(s =>
    cat.keys.some(k => s.title?.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(s.title?.toLowerCase()))
  );

  /* fallback: if no match, just show all for first category */
  const displaySkills = catSkills.length > 0 ? catSkills : (blockIndex === 0 ? allSkills.slice(0, 6) : []);
  if (displaySkills.length === 0) return null;

  return (
    <div
      ref={ref}
      className="mb-10"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${blockIndex * 0.1}s, transform 0.6s ease ${blockIndex * 0.1}s`,
      }}
    >
      {/* category label */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xs uppercase tracking-[0.25em] font-semibold"
          style={{ color: cat.color, fontFamily: "'DM Sans', sans-serif" }}
        >
          {cat.label}
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: `linear-gradient(to right, ${cat.color}55, transparent)` }}
        />
        <span
          className="text-xs"
          style={{ color: "#4b5563", fontFamily: "'DM Sans', sans-serif" }}
        >
          {displaySkills.length} skills
        </span>
      </div>

      {/* pills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displaySkills.map((s, i) => (
          <SkillPill
            key={s.id}
            data={s}
            color={cat.color}
            delay={i * 0.07}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [headRef, headInView] = useInView(0.3);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  /* skills that don't fit any category */
  const categorisedKeys = CATEGORIES.flatMap(c => c.keys.map(k => k.toLowerCase()));
  const uncategorised = skills.filter(
    s => !categorisedKeys.some(k => s.title?.toLowerCase().includes(k) || k.includes(s.title?.toLowerCase()))
  );

  const allCategories = uncategorised.length > 0
    ? [...CATEGORIES, { label: "Other", color: "#a78bfa", keys: uncategorised.map(s => s.title) }]
    : CATEGORIES;

  return (
    <>
      <style>{STYLES}</style>

      <div className="min-h-screen text-white px-5 sm:px-6 py-16" id="skills">
        <div className="max-w-5xl mx-auto">

          {/* heading */}
          <div className="text-center mb-4">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2"
              data-aos="fade-right"
            >
              Skills
            </h1>
          </div>

          {/* large editorial number + subtitle */}
          <div
            ref={headRef}
            className="flex flex-col sm:flex-row sm:items-end gap-4 mb-12"
            style={{
              opacity: headInView ? 1 : 0,
              transform: headInView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              className="text-gray-400 text-sm sm:text-base max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Technologies and tools I use to design, build, and ship modern web applications — organised by domain.
            </p>
            <div className="sm:ml-auto flex items-center gap-2 flex-shrink-0">
              <span
                className="text-5xl font-bold leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(250,204,21,0.4)",
                }}
              >
                {skills.length}
              </span>
              <span
                className="text-xs text-gray-500 uppercase tracking-widest leading-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Total<br />Skills
              </span>
            </div>
          </div>

          {/* category blocks */}
          {allCategories.map((cat, i) => (
            <CategoryBlock
              key={cat.label}
              cat={cat}
              allSkills={skills}
              blockIndex={i}
            />
          ))}

        </div>
      </div>
    </>
  );
};

export default Skills;