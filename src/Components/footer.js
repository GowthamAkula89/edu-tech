import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 EduTech+</p>

        <div className="mt-2">
          <a href="#facebook" className="text-blue-400 hover:underline">Facebook</a> |  
          <a href="#twitter" className="text-blue-400 hover:underline"> Twitter</a> |
          <a href="#linkedin" className="text-blue-400 hover:underline"> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
