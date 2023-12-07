import React, { useEffect, useState } from "react";
import MenuNav from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Card from "./components/card/card";
import {
  requestAnimais,
  requestArtes
} from "@/lib/request";

const App = () => {
  const [animaisData, setAnimaisData] = useState([]);
  const [artesData, setArtesData] = useState([]);

  useEffect(() => {
    // Chamadas à API
    requestAnimais().then((data) => setAnimaisData(data));
    requestArtes().then((data) => setArtesData(data));
  }, []);

  return (
    <>
      <MenuNav />
      <div className="site-container pt-10">
        <header className="bg-white shadow text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900">Bem-vindo!!</h1>
        </header>

        <main className="mx-auto max-w-7xl pb-8">
          {/* Conteúdo do Dashboard */}
          <DashboardContent animaisData={animaisData} artesData={artesData} />
        </main>
      </div>
      <Footer />
    </>
  );
};

const DashboardContent = ({ animaisData, artesData }) => {
  return (
    <div className="content-container">
      {/* Seção de Destaques */}
      <Section title="Destaques" data={animaisData.slice(0, 3)} />

      {/* Seção de Notícias de Animais */}
      <Section title="Notícias de Animais" data={animaisData.slice(3, 9)} />

      {/* Seção de Notícias de Artes */}
      <Section title="Notícias de Artes" data={artesData.slice(0, 6)} />
    </div>
  );
};

const Section = ({ title, data }) => {
  return (
    <div className="mt-8">
      {data && data.length > 0 && (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item) => (
              <Card key={item._id} data={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
