import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center text-center space-y-3">
                
                {/* Icon + Copyright */}
                <div className="flex items-center gap-2">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="text-blue-500"
                    >
                        <path d="M22.672 15.226l-2.432.811.841 2.515c..."></path>
                    </svg>
                    <p className="text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
