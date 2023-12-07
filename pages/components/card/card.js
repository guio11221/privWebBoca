import React, { useState, useEffect } from "react";
import Link from "next/link";

const Card = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulando um atraso de 1 segundo para demonstrar o carregamento
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        // Limpando o timeout ao desmontar o componente
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`bg-white rounded-lg overflow-hidden shadow-md mb-4 ${!isLoading ? 'loaded' : ''}`}>
            {isLoading ? (
                <div className="h-40 bg-gray-300 animate-pulse"></div>
            ) : (
                <>
                    <img
                        src={`https://via.placeholder.com/300?text=${data.nome}`}
                        alt={data.nome}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-800">{data.nome}</h3>
                        <p className="text-sm text-gray-600">
                            {data.descricao.length > 150 ? `${data.descricao.slice(0, 150)}...` : data.descricao}
                            <br />
                            {data.descricao.length > 150 && (
                                <a href={`/noticia/${data.nome}`}>
                                    <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full mt-2 transition duration-300">
                                        Ver Mais
                                    </button>
                                </a>
                            )}
                        </p>
                    </div>
                </>
            )}
            {!isLoading && data.palavras_chave && (
                <div className="p-3 bg-gray-100">
                    <p className="text-sm text-gray-600">
                        Palavras-chave: {data.palavras_chave}
                    </p>
                </div>
            )}

            <style jsx>{`
                .loaded {
                    margin: 0 auto 20px; /* Centraliza verticalmente e adiciona margem inferior */
                }
                
                @media (min-width: 640px) {
                    .loaded {
                        margin: 0 auto; /* Centraliza horizontalmente em telas maiores */
                    }
                }
            `}</style>
        </div>
    );
};

export default Card;
