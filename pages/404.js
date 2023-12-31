import React from 'react';

const NotFoundPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página não encontrada</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Desculpe, não conseguimos encontrar a página que você
                procura.</p>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                <a href='/'
                    className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                    Go back home
                </a>
            </div>
        </div>
    </main>
  );
};

export default NotFoundPage;
