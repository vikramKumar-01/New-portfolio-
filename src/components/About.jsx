import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen text-white px-5 sm:px-6 py-16 ">
      <div className="max-w-5xl mx-auto">

        {/* About Me Section */}
        <div className="text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2"
            data-aos="fade-right"
          >
            About Me
          </h1>
        </div>

        <div className="space-y-5 text-base sm:text-lg leading-relaxed">
          <p data-aos="fade-up" data-aos-delay="100">
            Hello! 👋 I’m <span className="text-blue-400 font-semibold">Vikram Kr Chaurasiya</span>, a passionate
            <strong> Full Stack Web Developer</strong> from Darbhanga. I completed my <strong>Bachelor of Computer Applications (BCA)</strong> from Babasaheb Bhimrao Ambedkar Bihar University (BRABU) and am currently pursuing
            <strong> Master of Computer Applications (MCA)</strong> from Vivekananda Global University, Jaipur.
          </p>

          <p data-aos="fade-up" data-aos-delay="150">
            I specialize in building fast, dynamic, and user-focused web applications using the
            <span className="text-blue-400 font-medium"> MERN Stack</span>. My passion lies in delivering impactful and interactive digital experiences.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            💡 Always eager to learn and adapt, I focus on clean code, scalable architecture, and solving real-world problems with efficiency.
          </p>

          <p data-aos="fade-up" data-aos-delay="250">
            🧠 I value collaboration, curiosity, and creativity. As a fresher, I’m enthusiastic about working with teams and learning through hands-on experience.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            Let's connect and build something meaningful together. I’m always open to learning, sharing, and growing! 🚀
          </p>
        </div>

        {/* Education Timeline */} 
        <div className="text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mt-16 mb-10 border-b-4 border-green-400 inline-block pb-2"
            data-aos="fade-right"
          >
            🎓 My Education
          </h2>
        </div>

        <ul className="timeline timeline-vertical text-white">
          {/* 10th */}
          <li data-aos="fade-up" data-aos-delay="100">
            <div className="timeline-start timeline-box bg-base-300 border-yellow-400 hover:bg-black hover:shadow-[5px_5px_10px_rgba(101,175,10,0.5)] hover:scale-105 transition-transform duration-300 mx-5">
              <h3 className="text-blue-300 font-semibold text-2xl">10th Standard – 75%</h3>
              <p className="text-xl text-gray-300">B K D Zila High School Laheriasarai Darbhanga</p>
              <p className="text-sm text-gray-400">Bihar School Examination Board – 2020</p>
            </div>
            <div className="timeline-middle text-green-400">
              <CheckIcon />
            </div>
            <hr className="bg-green-400" />
          </li>

          {/* 12th */}
          <li data-aos="fade-up" data-aos-delay="200">
            <hr className="bg-green-400" />
            <div className="timeline-middle text-green-400">
              <CheckIcon />
            </div>
            <div className="timeline-end timeline-box bg-base-300 border-yellow-400 hover:bg-black hover:shadow-[5px_5px_10px_rgba(101,175,10,0.5)] hover:scale-105 transition-transform duration-300 mx-5">
              <h3 className="text-blue-300 font-semibold text-2xl">Intermediate of Science (ISC) – 60%</h3>
              <p className="text-xl text-gray-300">Marwari College Darbhanga</p>
              <p className="text-sm text-gray-400">Bihar School Examination Board – 2020-2022</p>
            </div>
            <hr className="bg-green-400" />
          </li>

          {/* BCA */}
          <li data-aos="fade-up" data-aos-delay="300">
            <hr className="bg-green-400" />
            <div className="timeline-start timeline-box bg-base-300 border-yellow-400 hover:bg-black hover:shadow-[5px_5px_10px_rgba(101,175,10,0.5)] hover:scale-105 transition-transform duration-300 mx-5">
              <h3 className="text-blue-300 font-semibold text-2xl">Bachelor of Computer Applications (BCA) – 78%</h3>
              <p className="text-xl text-gray-300">L.S. College Muzaffarpur</p>
              <p className="text-sm text-gray-400">Babasaheb Bhimrao Ambedkar Bihar University – 2022-2025</p>
            </div>
            <div className="timeline-middle text-green-400">
              <CheckIcon />
            </div>
            <hr className="bg-green-400" />
          </li>

          {/* MCA */}
          <li data-aos="fade-up" data-aos-delay="400">
            <hr className="bg-green-400" />
            <div className="timeline-middle">
              <CheckIcon />
            </div>
            <div className="timeline-end timeline-box bg-base-300 border-yellow-400 hover:bg-black hover:shadow-[5px_5px_10px_rgba(101,175,10,0.5)] hover:scale-105 transition-transform duration-300 mx-5">
              <h3 className="text-blue-300 font-semibold text-2xl">Master of Computer Applications (MCA) – Pursuing</h3>
              <p className="text-xl text-gray-300">Vivekananda Global University, Jaipur - 2025-2027</p>
              <p className="text-sm text-gray-400">Rajasthan</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// ✅ CheckIcon Component (for timeline icons)
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default About;
