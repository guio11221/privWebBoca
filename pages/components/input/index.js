import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const SearchAutoComplete = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get(`https://www.bocaweb.com.br/apibocaweb`, {
                    params: { nome: searchTerm }
                });

                console.log('API Response:', response.data);

                const data = response.data;
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
                setSuggestions([]);
            }
        };

        if (searchTerm.length >= 3) {
            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEnterPress = () => {
        if (suggestions.length > 0) {
            navigateToNews(suggestions[0]);
        }
    };

    const handleButtonClick = () => {
        if (suggestions.length > 0) {
            navigateToNews(suggestions[0]);
        }
    };

    const navigateToNews = (selectedNews) => {
        const newsRoute = `/noticia/${encodeURIComponent(selectedNews.nome)}`;
        window.location.href = newsRoute;
    };

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Pesquisar..."
                className="px-4 py-2 placeholder-gray-400 text-gray-400 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-500 w-full md:w-64"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={(e) => e.key === 'Enter' && handleEnterPress()}
                list="search-suggestions"
            />
            {suggestions.length > 0 && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md overflow-hidden w-full z-10">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="cursor-pointer  hover:bg-gray-100">
                            <a 
                             className="block px-4 py-2 text-gray-800"
                             href={`/noticia/${encodeURIComponent(suggestion.nome)}`}
                            >{suggestion.nome}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchAutoComplete;
