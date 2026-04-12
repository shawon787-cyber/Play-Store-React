import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white mt-16">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Hero.io</h2>
          <p className="text-sm text-gray-200">
            We build modern and productive apps to make your life easier and smarter.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Apps</li>
            <li className="hover:text-white cursor-pointer">Installation</li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h3 className="font-semibold mb-4">Popular Apps</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>WhatsApp</li>
            <li>Spotify</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <span className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-purple-600 transition">
              <FaFacebookF />
            </span>
            <span className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-purple-600 transition">
              <FaTwitter />
            </span>
            <span className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-purple-600 transition">
              <FaGithub />
            </span>
            <span className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-purple-600 transition">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-200">
        © 2026 Hero.io — All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;