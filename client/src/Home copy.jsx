import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
  // const [token, setToken] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // // const [pokemonList, setPokemonList] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [count, setCount] = useState(1)
  setToken(sessionStorage.getItem('token'))
  // Load token from sessionStorage
  const fachedata = async () => {
    const response = await axios.get(`http://localhost:5000/v1/pokemon?page=${count}`)
    console.log(response);

  }
  const handleSearch = () => {
console.log('helo')
  }
  

  return (

    <>
    hello</>
    // <div className="min-h-screen bg-gray-50 p-4">
    //   {/* Conditional rendering based on token */}
    //   {token === '' ? (
    //     <div className="flex items-center justify-center h-full">
    //       <div className="p-4 bg-white rounded-lg shadow-md">
    //         <h1 className="text-2xl font-bold text-center">Please Login</h1>
    //         {/* You can add a Login form or component here */}
    //       </div>
    //     </div>
    //   ) : (
    //     <>
    //       {/* Header */}
    //       <header className="bg-red-500 text-white p-4 rounded-b-lg flex justify-between items-center mb-6">
    //         <h1 className="text-2xl font-bold">Pokédex</h1>
    //         <div className="flex items-center space-x-4">
    //           <input
    //             type="text"
    //             placeholder="Search by name"
    //             value={searchTerm}
    //             onChange={handleSearch}
    //             className="p-2 rounded border border-white bg-transparent text-white placeholder-white"
    //           />
    //           <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
    //             <span className="text-black text-xs">👤</span>
    //           </div>
    //         </div>
    //       </header>

    //       {/* Pokémon Grid */}
    //       {pokemonList.map((item, index) => {
    //         <div>
    //           {item}
    //         </div>
    //       })}
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
    //         {/* {filteredPokemon.map((pokemon, index) => (
    //           <div key={index} className="p-4 flex flex-col items-center bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
    //             <img src={pokemon.image} alt={pokemon.name} className="w-full object-contain mb-2" />
    //             <h3 className="text-lg font-bold">{pokemon.name}</h3>
    //             <p className="text-sm text-gray-600">#{pokemon.number}</p>
    //             <span className="px-2 py-1 bg-gray-200 rounded-full text-xs mt-2">
    //               {pokemon.type}
    //             </span>
    //           </div>
    //         ))} */}
    //       </div>

    //       {/* Load More Button */}
    //       <div className="text-center">
    //         <button className="bg-gray-200 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
    //           Load More
    //         </button>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};

export default Home;