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

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Feel free to reach out for any collaboration or project
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <ContactItem
              icon={<HiOutlineMail className="text-2xl text-blue-400" />}
              label="Email"
              value="bhartivikram633@gmail.com"
              link="mailto:bhartivikram633@gmail.com"
            />
            <ContactItem
              icon={<HiOutlinePhone className="text-2xl text-blue-400" />}
              label="Phone"
              value="+91 82524 35228"
              link="tel:+918252435228"
            />
            <ContactItem
              icon={<HiOutlineLocationMarker className="text-2xl text-blue-400" />}
              label="Location"
              value="Muzaffarpur, Bihar, India"
            />
            <ContactItem
              icon={<HiOutlineBriefcase className="text-2xl text-blue-400" />}
              label="Availability"
              value="Freelance, Remote & Fulltime Work"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            <SocialIcon
              href="https://www.instagram.com/vikram.kumar.754"
              bg="bg-pink-500"
              icon={<FaInstagram />}
              title="Instagram"
            />
            <SocialIcon
              href="https://www.facebook.com/vikram.kumar.7541/"
              bg="bg-blue-600"
              icon={<CiFacebook />}
              title="Facebook"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/vikram-kr-chaurasiya-608901235/"
              bg="bg-blue-800"
              icon={<CiLinkedin />}
              title="LinkedIn"
            />
            <SocialIcon
              href="https://x.com/VikramK52918201?t=CeoVnApT0Xns0DmwPIq6AA&s=09"
              bg="bg-gray-700"
              icon={<FaTwitterSquare />}
              title="Twitter"
            />
            <SocialIcon
              href="https://github.com/vikramKumar-01"
              bg="bg-gray-800"
              icon={<FaGithubSquare />}
              title="GitHub"
            />
            <SocialIcon
              href="https://www.youtube.com/@codeDebugWithVikram"
              bg="bg-red-700"
              icon={<FaYoutube />}
              title="YouTube"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable ContactItem Component
const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-4">
    {icon}
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      {link ? (
        <a href={link} className="text-white hover:text-blue-400 text-sm sm:text-base">
          {value}
        </a>
      ) : (
        <p className="text-white text-sm sm:text-base">{value}</p>
      )}
    </div>
  </div>
);

// Reusable SocialIcon Component
const SocialIcon = ({ href, icon, bg, title }) => (
  <a href={href} target="_blank" rel="noreferrer" title={title}>
    <button
      className={`text-white ${bg} hover:scale-110 transition-all p-4 rounded-full text-2xl sm:text-3xl`}
    >
      {icon}
    </button>
  </a>
);

export default Contact;
