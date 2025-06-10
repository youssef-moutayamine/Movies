import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { movies } from './allMovies'
import { CountriesJson } from '../../constant'
import { useMovieContext } from '../../context/index'

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
        <div className="bg-slate-900 min-h-screen text-white">
            {/* Search Bar */}
            <div className="w-full bg-gray-800 py-4 px-4 sticky top-0 z-50 border-b border-gray-700">
                <div className="container mx-auto">
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search movies by title or genre..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg
                            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Movies Grid */}
            <div className="p-5">
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
        </div>
    )
}

export default Section