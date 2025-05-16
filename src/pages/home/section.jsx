import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { movies } from './allMovies'
import { CountriesJson } from '../../constant'
import { useMovieContext } from '../../context/MovieContext'

const Section = () => {
    const [search, setSearch] = useState("")
    const { selectMovie } = useMovieContext()
    const navigate = useNavigate()

    const filtered = movies.filter(m =>
        m.title.toLowerCase().includes(search.toLowerCase()) || m.type.toLowerCase().includes(search.toLowerCase())
    )

    const handleMovieClick = (movie) => {
        selectMovie(movie)
        navigate('/about')
    }

    return (
        <div className="bg-slate-900 min-h-screen text-white p-5">
            <div className="flex flex-wrap gap-5 justify-center">
                
                {filtered.map(m => (
                    <div
                        key={m.id}
                        onClick={() => handleMovieClick(m)}
                        className="bg-black w-52 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform no-underline"
                    >
                        <img
                            src={m.poster}
                            alt={m.title}
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-3">
                            <h3 className="font-bold text-lg">{m.title}</h3>
                            <p className="text-sm text-sky-400">{m.type}</p>
                            <p className="text-sm text-slate-300">Date: {m.date}</p>
                            <p className="text-sm text-slate-300">Time: {m.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Section