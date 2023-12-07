import { useEffect, useState } from 'react';
import SearchAutoComplete from '../input';
import Image from 'next/image';
import logo from '../../../public/logo_branco.png'

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setIsVisible(!isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);



  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              className="h-8 w-8 mr-4"
              src={logo}
              alt="Your Company"
            />
            <div className="hidden md:block">
              <ul className="flex items-baseline space-x-4">
                <li><a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a></li>
                <li><a href="/sobre" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sobre</a></li>
                <li><a href="/contatos" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contatos</a></li>
              </ul>
            </div>
          </div>
          <div className="flex-grow md:flex md:items-center md:justify-end">
           <SearchAutoComplete />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
