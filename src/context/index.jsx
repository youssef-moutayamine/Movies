import { createContext, useContext, useState } from "react";

// Create a context for movies
const MovieContext = createContext();

// Create a provider component
const MovieProvider = ({ children }) => {
    // State to store the selected movie
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    // Function to update the selected movie
    const selectMovie = (movie) => {
        setSelectedMovie(movie);
    };
    
    // Context value
    const value = {
        selectedMovie,
        selectMovie
    };
    
    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};

// Custom hook to use the movie context
const useMovieContext = () => useContext(MovieContext);

export { MovieProvider, useMovieContext };