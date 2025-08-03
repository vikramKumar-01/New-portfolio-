import {
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare,
    FaYoutube,
} from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";

const Contact = () => {
    return (
        <section id="contact" className=" py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-white">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
                    <p className="text-gray-400 mt-3">Feel free to reach out for any collaboration or project</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className=" rounded-2xl p-8  space-y-6">
                        <div className="flex items-start gap-4">
                            <HiOutlineMail className="text-2xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <a
                                    href="mailto:bhartivikram633@gmail.com"
                                    className="text-white hover:text-blue-400"
                                >
                                    bhartivikram633@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <HiOutlinePhone className="text-2xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <a
                                    href="tel:+918252435228"
                                    className="text-white hover:text-blue-400"
                                >
                                    +91 82524 35228
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <HiOutlineLocationMarker className="text-2xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-white">Muzaffarpur, Bihar, India</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <HiOutlineBriefcase className="text-2xl text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Availability</p>
                                <p className="text-white">Freelance, Remote & Fulltime Work</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
                        <a href="https://www.instagram.com/vikram.kumar.754" target="_blank" rel="noreferrer" title="Instagram">
                            <button className="text-white bg-pink-500 hover:scale-110 transition p-4 rounded-full text-3xl">
                                <FaInstagram />
                            </button>
                        </a>
                        <a href="https://www.facebook.com/vikram.kumar.7541/" target="_blank" rel="noreferrer" title="Facebook">
                            <button className="text-white bg-blue-600 hover:scale-110 transition p-4 rounded-full text-3xl">
                                <CiFacebook />
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/vikram-kr-chaurasiya-608901235/" target="_blank" rel="noreferrer" title="LinkedIn">
                            <button className="text-white bg-blue-800 hover:scale-110 transition p-4 rounded-full text-3xl">
                                <CiLinkedin />
                            </button>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" title="Twitter">
                            <button className="text-white bg-gray-700 hover:scale-110 transition p-4 rounded-full text-3xl">
                                <FaTwitterSquare />
                            </button>
                        </a>
                        <a href="https://github.com/vikramKumar-01" target="_blank" rel="noreferrer" title="GitHub">
                            <button className="text-white bg-gray-800 hover:scale-110 transition p-4 rounded-full text-3xl">
                                <FaGithubSquare />
                            </button>
                        </a>
                        <a href="https://www.youtube.com/@codeDebugWithVikram" target="_blank" rel="noreferrer" title="YouTube">
                            <button className="text-white bg-red-700 hover:scale-110 transition p-4 rounded-full text-3xl">
                                <FaYoutube />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
