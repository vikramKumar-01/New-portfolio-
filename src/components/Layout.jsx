import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navbar />
      <main className="flex-grow pt-16 pb-8 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
