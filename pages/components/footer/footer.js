import React from 'react';
import { FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiUser } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-3 text-gray-300">Participação:</h3>
          <div className="flex items-center space-x-2">
            <FiUser className="text-gray-400" />
            <span className="text-gray-400">Guilherme Santos</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiUser className="text-gray-400" />
            <span className="text-gray-400">Jucielly Gonçalves </span>
          </div>
            <div className="flex items-center space-x-2">
            <FiUser className="text-gray-400" />
            <span className="text-gray-400">Adilso </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FiFacebook className="text-3xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FiTwitter className="text-3xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FiLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 Privizinho, kskksksk.</p>
      </div>
    </footer>
  );
};

export default Footer;
