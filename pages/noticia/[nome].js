import React, { useState, useEffect } from 'react';
import NavBar from '../components/menu/menu';
import Footer from '../components/footer/footer';
import { fetchData } from '@/lib/request';
import Link from 'next/link';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// Componente de Loading
const LoadingCard = () => (
  <div className="mb-8 p-6 bg-gray-200 shadow-md rounded-md animate-pulse">
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
  </div>
);

const NoticiaCard = ({ noticia }) => {
  const { nome, descricao, usuario, data_inclusao, _id } = noticia;

  const MAX_DESCRIPTION_LENGTH = 150;
  const [modalOpen, setModalOpen] = useState(false);

  const formatarData = (dataString) => {
    const data = new Date(dataString.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    return format(data, "d 'de' MMMM 'de' yyyy, HH:mm:ss", { locale: ptBR });
  };

  const dataFormatada = formatarData(data_inclusao);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mb-8 p-6 bg-white shadow-md rounded-md transition-transform hover:scale-105">
      <Link href={`/noticia/${encodeURIComponent(nome)}`}>
        <h2 className="text-2xl font-bold mb-2 text-blue-500 hover:underline focus:outline-none">
          {nome}
        </h2>
      </Link>
      <p className="text-gray-700 mb-4">
        {descricao.length > MAX_DESCRIPTION_LENGTH
          ? `${descricao.slice(0, MAX_DESCRIPTION_LENGTH)}...`
          : descricao}
      </p>
      <div className="flex justify-between items-center text-gray-600 mb-4">
        <p className="text-sm">Por {usuario}</p>
        <p className="text-sm">{dataFormatada}</p>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        className="block mx-auto "
      >
        Ver Mais
      </Button>
      <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>{nome}</DialogTitle>
        <DialogContent>
          <p>{descricao}</p>
          <p className="text-gray-600 mt-4">Por {usuario}</p>
          <p className="text-gray-600">Data: {dataFormatada}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const NoticiaPage = ({ nome, noticias }) => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (noticia) => {
    setSelectedNoticia(noticia);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <NavBar />
      <div className={`container mx-auto my-8 pt-9 ${noticias && noticias.length === 1 ? 'max-w-screen-xl' : ''}`}>
        {loading ? (
          <>
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          <>
            {noticias && noticias.length > 0 ? (
              noticias.map((noticia) => (
                <NoticiaCard
                  key={noticia._id}
                  noticia={noticia}
                  onOpenModal={() => handleOpenModal(noticia)}
                />
              ))
            ) : (
              <p className="text-gray-600">Nenhuma notícia encontrada para {nome}.</p>
            )}
          </>
        )}
      </div>
      <Footer />

      {selectedNoticia && (
        <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="sm" fullWidth>
          {/* Conteúdo do modal */}
          <DialogTitle>{selectedNoticia.nome}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {selectedNoticia.descricao}
            </DialogContentText>
            <p>Por {selectedNoticia.usuario}</p>
            <p>{formatarData(selectedNoticia.data_inclusao)}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary" autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};


export const getStaticProps = async ({ params }) => {
  try {
    const { nome } = params;
    const noticias = await fetchData(nome);

    return {
      props: { nome, noticias },
    };
  } catch (error) {
    console.error('Error fetching noticias:', error);
    return {
      props: { nome: '', noticias: [] },
    };
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default NoticiaPage;
