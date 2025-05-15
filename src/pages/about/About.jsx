import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../../data/movies';

const About = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(movie => movie.id === parseInt(id));



  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Movie React</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="bg-gray-700 p-6">
            <h1 className="text-3xl font-bold">{movie.name}</h1>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-6">
              <img 
                src={movie.poster} 
                alt={movie.name} 
                className="w-full rounded-lg shadow-lg"
              />
              
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded text-lg mr-3">
                    {movie.evaluation}
                  </span>
                  <span className="text-gray-300">{movie.date}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{movie.category} • {movie.time}</p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-6">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Description</h2>
                <p className="text-gray-300 leading-relaxed">{movie.description}</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Trailer</h2>
                <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center p-10">
                    <svg className="w-16 h-16 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                    <a 
                      href={movie.trailer} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className=" mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 