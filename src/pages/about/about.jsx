import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CountriesJson } from '../../constant';
import { useMovieContext } from '../../context/index';

const AboutPage = () => {
    const { selectedMovie } = useMovieContext();
    const navigate = useNavigate();
    
    if (!selectedMovie) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 className="text-3xl mb-4">No movie selected</h1>
                <button 
                    onClick={() => navigate('/')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    const movie = selectedMovie;

    return (
        <div className="min-h-screen bg-gray-900 text-white pb-16">
      

            <div
                className="w-full h-[50vh] md:h-[60vh] relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${movie.poster})`,
                    backgroundPosition: 'center 20%'
                }}
            >
                <div className="absolute -bottom-0 left-0 w-full p-4 md:p-8 pb-16">
                    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-end">
                        <div className="m-4  md:m-8">
                            <img 
                                src={movie.poster} 
                                alt={movie.title} 
                                className="w-48 md:w-64 h-72 md:h-96 object-cover rounded-lg shadow-2xl" 
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">{movie.title}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start items-center mb-4 gap-2">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                                    {movie.type}
                                </span>
                                <span className="text-gray-300">
                                    {movie.date}
                                </span>
                                <span className="text-gray-300">
                                    {movie.time}
                                </span>
                            </div>
                            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto md:mx-0">
                                {movie.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">About the Movie</h2>
                        <p className="text-gray-300 mb-6 text-base md:text-lg">
                            {movie.description}
                        </p>

                        <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Movie Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-400">Release Date</p>
                                    <p>{movie.date}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Showing Time</p>
                                    <p>{movie.time}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Genre</p>
                                    <p>{movie.type}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Movie ID</p>
                                    <p>#{movie.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Book Tickets</h2>
                        <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
                            <div className="mb-6">
                                <p className="text-gray-400 mb-2">Date</p>
                                <div className="bg-gray-700 p-3 rounded font-bold">
                                    {movie.date}
                                </div>
                            </div>
                            <div className="mb-6">
                                <p className="text-gray-400 mb-2">Time</p>
                                <div className="bg-gray-700 p-3 rounded font-bold">
                                    {movie.time}
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition-all">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-16 text-center">
                <button 
                    onClick={() => navigate('/')}
                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 md:px-8 py-3 rounded-full transition-all"
                >
                    Back to Movies
                </button>
            </div>
        </div>
    );
};

export default AboutPage;