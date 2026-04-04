import {
  FaInstagram,
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
} from "react-icons/hi";

const contactItems = [
  {
    icon: <HiOutlineMail className="text-xl text-yellow-400" />,
    label: "Email",
    value: "bhartivikram633@gmail.com",
    link: "mailto:bhartivikram633@gmail.com",
  },
  {
    icon: <HiOutlinePhone className="text-xl text-yellow-400" />,
    label: "Phone",
    value: "+91 82524 35228",
    link: "tel:+918252435228",
  },
  {
    icon: <HiOutlineLocationMarker className="text-xl text-yellow-400" />,
    label: "Location",
    value: "Muzaffarpur, Bihar, India",
  },
  {
    icon: <HiOutlineBriefcase className="text-xl text-yellow-400" />,
    label: "Availability",
    value: "Freelance · Remote · Fulltime",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/vikram.kumar.754",
    icon: <FaInstagram />,
    title: "Instagram",
    color: "hover:text-pink-400 hover:border-pink-400/50",
  },
  {
    href: "https://www.facebook.com/vikram.kumar.7541/",
    icon: <CiFacebook />,
    title: "Facebook",
    color: "hover:text-blue-400 hover:border-blue-400/50",
  },
  {
    href: "https://www.linkedin.com/in/vikram-kr-chaurasiya-608901235/",
    icon: <CiLinkedin />,
    title: "LinkedIn",
    color: "hover:text-sky-400 hover:border-sky-400/50",
  },
  {
    href: "https://x.com/VikramK52918201?t=CeoVnApT0Xns0DmwPIq6AA&s=09",
    icon: <FaTwitterSquare />,
    title: "Twitter",
    color: "hover:text-slate-300 hover:border-slate-400/50",
  },
  {
    href: "https://github.com/vikramKumar-01",
    icon: <FaGithubSquare />,
    title: "GitHub",
    color: "hover:text-white hover:border-white/40",
  },
  {
    href: "https://www.youtube.com/@codeDebugWithVikram",
    icon: <FaYoutube />,
    title: "YouTube",
    color: "hover:text-red-400 hover:border-red-400/50",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 sm:px-8 md:px-16 overflow-hidden"
    >

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3" data-aos="fade-up" data-aos-duration="800">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-yellow-400/80 border border-yellow-400/30 rounded-full px-4 py-1 bg-yellow-400/5">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
              Connect
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Open to collaborations, freelance projects, and full-time roles. Let's build something great together.
          </p>
        </div>

        {/* Cards row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Contact Info Card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 flex flex-col gap-6 shadow-xl">
            {/* Card label */}
            <p className="text-xs font-semibold tracking-widest uppercase text-yellow-400/70">
              Contact Info
            </p>

            <div className="flex flex-col gap-5">
              {contactItems.map(({ icon, label, value, link }) => (
                <div key={label} className="flex items-center gap-4 group">
                  {/* Icon box */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-yellow-400/20 bg-yellow-400/5 shrink-0 group-hover:border-yellow-400/50 transition-all duration-200">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-0.5">{label}</p>
                    {link ? (
                      <a
                        href={link}
                        className="text-sm text-slate-200 hover:text-yellow-400 transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
          </div>

          {/* Social Links Card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 flex flex-col gap-6 shadow-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-yellow-400/70">
              Find Me On
            </p>

            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map(({ href, icon, title, color }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={title}
                  className={`flex flex-col items-center gap-2 py-4 rounded-xl border border-white/10 bg-white/5
                    text-slate-400 text-2xl
                    hover:bg-white/10 transition-all duration-200 ${color}`}
                >
                  {icon}
                  <span className="text-[10px] uppercase tracking-wider font-medium">{title}</span>
                </a>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;