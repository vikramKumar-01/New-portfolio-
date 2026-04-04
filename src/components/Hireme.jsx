import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineMail, HiOutlineLightningBolt } from "react-icons/hi";
import { MdOutlineWorkOutline, MdOutlineHandshake } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";

const offerings = [
  {
    icon: <MdOutlineWorkOutline className="text-2xl text-yellow-400" />,
    title: "Full-Time Roles",
    desc: "Available for on-site or remote positions as a full stack developer.",
  },
  {
    icon: <BsGlobe2 className="text-2xl text-yellow-400" />,
    title: "Freelance Projects",
    desc: "End-to-end web app development tailored to your requirements.",
  },
  {
    icon: <MdOutlineHandshake className="text-2xl text-yellow-400" />,
    title: "Collaborations",
    desc: "Open to teaming up on open source, startups, or side projects.",
  },
];

const HireMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="hire"
      className="relative w-full py-24 px-4 sm:px-8 md:px-16 overflow-hidden"
    >

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-12 items-center text-center">

        {/* Section header */}
        <div className="flex flex-col items-center gap-3" data-aos="fade-up" data-aos-delay="100">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-yellow-400/80 border border-yellow-400/30 rounded-full px-4 py-1 bg-yellow-400/5">
            Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Looking for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
              Developer?
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
            I'm open to freelance projects, collaborations, or full-time roles.
            Let's work together and bring your ideas to life!
          </p>
        </div>

        {/* Offering cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {offerings.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl
                border border-white/10 bg-white/5 backdrop-blur-md
                hover:border-yellow-400/30 hover:bg-yellow-400/5
                transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/5 group-hover:border-yellow-400/50 transition-all duration-200">
                {icon}
              </div>
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div
          className="relative w-full rounded-2xl border border-yellow-400/25 bg-yellow-400/5 backdrop-blur-sm px-8 py-10 flex flex-col items-center gap-6 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-500/5 pointer-events-none" />

          <div className="flex items-center gap-2">
            <HiOutlineLightningBolt className="text-yellow-400 text-lg" />
            <span className="text-xs font-semibold tracking-widest uppercase text-yellow-400/80">
              Response within 24 hrs
            </span>
          </div>

          <p className="text-white text-lg sm:text-xl font-bold max-w-md leading-snug">
            Have a project in mind? Let's talk and make it happen.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=bhartivikram633@gmail.com&su=Hiring%20Request&body=Hi%20Vikram%2C%0A%0AI%20am%20interested%20in%20working%20with%20you..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm
              bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900
              hover:from-yellow-300 hover:to-amber-400
              shadow-[0_4px_24px_rgba(234,179,8,0.35)]
              hover:shadow-[0_4px_32px_rgba(234,179,8,0.55)]
              transition-all duration-300"
          >
            <HiOutlineMail className="text-base" />
            Hire Me
          </a>

          <p className="text-slate-500 text-xs">
            bhartivikram633@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default HireMe;