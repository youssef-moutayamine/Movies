import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    const selectMovie = (movie) => {
        setSelectedMovie(movie);
    };
    
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

const useMovieContext = () => useContext(MovieContext);

export { MovieProvider, useMovieContext };


