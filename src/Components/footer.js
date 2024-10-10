import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <h2 className="text-lg font-semibold mb-4">EduTech+</h2>
            <p className="text-gray-400">
              Empowering learning through technology. Providing personalized education solutions for students and educators globally.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:text-right">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-start sm:justify-end space-x-4">
              <a href="#facebook" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <FaFacebookF size={24} />
              </a>
              <a href="#twitter" className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                <FaTwitter size={24} />
              </a>
              <a href="#linkedin" className="text-blue-700 hover:text-blue-900 transition-colors duration-200">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} EduTech+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
