import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './color.css'
const Home = ({setToken}) => {
  const [result, setResult] = useState(null); // Define state
  const [count, setCount] = useState(1);     // Define count for pagination

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/v1/pokemon?page=${count}`);
      const maindata = response.data;
      setResult(maindata.data); // Assuming API response has a nested 'data' field
      // Log after state updates (won't show immediately due to async state)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Runs on mount (and remount after refresh)
  useEffect(() => {
    fetchData();
  }, [count]); // Empty array means it runs only on mount

  // Optional: Log result when it updates
  useEffect(() => {
    if (result) {
      console.log("Updated result:", result);
    }
  }, [result,count]);
  const seachPage = async (e) => {
    try {
      const response = await axios.get(`http://localhost:5000/v1/pokemon?q=${e}`);
      const maindata = response.data;
      setResult(maindata.data); // Assuming API response has a nested 'data' field
      // Log after state updates (won't show immediately due to async state)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <>
      <Header seachPage={seachPage} token={setToken}/>
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 w-[80%] m-auto">
        {result ? (

          result.map((pokemon, index) => (
            // <div key={index}>{item.name.english}</div> 

            <div key={index} className={`p-1 flex flex-col items-center  rounded-lg shadow-md transform transition-transform hover:scale-105 ${pokemon.type[0]}`}>
              <img src={pokemon.image.hires} alt={pokemon.name.english} className="w-full object-contain mb-2" />
              <div className='w-full bg-slate-50 p-5 rounded-lg'>

                <h3 className="text-lg font-bold">{pokemon.name.english}</h3>
                <p className="text-sm text-gray-600">#{pokemon.number}</p>
                <span className="px-2 py-1 bg-gray-200 rounded-full text-xs mt-2">
                  {pokemon.type}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className='text-center w-full my-2'>
        <button className='mx-auto text-center' onClick={()=>{setCount(count + 1)}}>load more</button>
      </div>
    </>
  );
};

export default Home;