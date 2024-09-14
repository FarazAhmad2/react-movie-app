import React from 'react'

const MovieList = ({movies}) => {
  return (
    <div className='mt-6 w-full rounded overflow-hidden'>
        <table className='border-collapse border w-full'>
            <thead>
                <tr>
                    <th className='bg-zinc-200 border-[1px] border-slate-300 text-left px-2 py-1'>Genre</th>
                    <th className='bg-zinc-200 border-[1px] border-slate-300 text-left px-2 py-1'>Year</th>
                    <th className='bg-zinc-200 border-[1px] border-slate-300 text-left px-2 py-1'>Title</th>
                </tr>
            </thead>
            <tbody>
            {movies && movies.map((movie,idx)=>
            <tr className='hover:bg-zinc-200' key={idx}>
                <td className='border-[1px] border-slate-300 text-left px-2 py-1'>{movie.title}</td>
                <td className='border-[1px] border-slate-300 text-left px-2 py-1'>{movie.genre}</td>
                <td className='border-[1px] border-slate-300 text-left px-2 py-1'>{movie.year}</td>
            </tr>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default MovieList