import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo_branco.png';
import logo_preto from '../../public/logo_black.png';
import NavBar from '../components/menu/menu';
import Footer from '../components/footer/footer';

const Sobre = () => {
  const [logoTheme, setLogoTheme] = useState('branco');

  const toggleLogoTheme = () => {
    setLogoTheme((prevTheme) => (prevTheme === 'branco' ? 'preto' : 'branco'));
  };

  return (
    <>
    <NavBar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 pt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center" onClick={toggleLogoTheme}>
              <Image
                src={logoTheme === 'branco' ? logo : logo_preto}
                alt="Imagem da equipe"
                className="rounded-lg shadow-md cursor-pointer"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Sobre Nós
              </h1>
              <p className="text-lg text-gray-700 leading-loose">
                O <a target='_blank' href='https://www.bocaweb.com.br' className="text-blue-500 hover:underline focus:outline-none">BocaWeb</a> é uma plataforma inovadora que possibilita o acesso a Objetos Digitais em Audiodescrição (ODA). Esses ODAs consistem em imagens estáticas, textos descritivos e arquivos de áudio com descrições, proporcionando uma experiência inclusiva para usuários com deficiência visual.
                <br />
                A finalidade desse site é aprender <a target='_blank' href='https://nextjs.org' className="text-blue-500 hover:underline focus:outline-none">Next.js</a>, consumindo a api do BocaWeb, e meio que uma forma
                de divulgar esse projeto maravilhoso e que vem ajudando pessoas com essa deficiência. Espero que
                goste desse site, futuramente vamos melhorar ele, obrigado!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
