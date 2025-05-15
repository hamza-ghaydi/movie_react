import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { movies } from '../../data/movies';

const Home = () => {
  const navigate = useNavigate();
  const [moviesList, setMoviesList] = useState(movies);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setMoviesList(movies); 
    } else {
      const filteredMovies = movies.filter(movie => 
        movie.name.toLowerCase().includes(term.toLowerCase())
      );
      setMoviesList(filteredMovies);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-6">Movies React</h1>
        
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {moviesList.map((movie) => (
          <div 
            key={movie.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={movie.poster} 
                alt={movie.name} 
                className="w-full h-full object-contain "
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 truncate">{movie.name}</h2>
              <div className="flex items-center mb-2">
                <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded text-sm mr-2">
                  {movie.evaluation}
                </span>
                <span className="text-gray-400 text-sm">{movie.date}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{movie.category} • {movie.time}</p>
              <button 
                onClick={() => navigate(`/about/${movie.id}`)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {moviesList.length === 0 && (
        <div className="text-center mt-8">
          <p className="text-gray-400 text-xl">No movies found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Home; 