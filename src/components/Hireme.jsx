import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HireMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="hire" className="py-20 px-4 mt-[100px] ">
      <div
        className="max-w-2xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Looking for a Developer?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10">
          I'm open to freelance projects, collaborations, or full-time roles. Let’s work together and bring your ideas to life!
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&to=bhartivikram633@gmail.com&su=Hiring%20Request&body=Hi%20Vikram%2C%0A%0AI%20am%20interested%20in%20working%20with%20you..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-wide bg-yellow-400 text-black text-lg font-semibold hover:bg-yellow-300 transition-transform duration-300 transform hover:scale-105 shadow-lg">
            📩 Hire Me
          </button>
        </a>
      </div>
    </section>
  );
};

export default HireMe;
