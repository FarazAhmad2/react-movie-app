import React from "react";

const GenreFilter = ({ genres, onSelectGenre }) => {
  return (<div className="bg-zinc-200 p-4 rounded">
  <h1 className="text-left font-bold text-2xl mb-2">Filter by Genre</h1>
    <div className="flex flex-wrap justify-between gap-4">
      {genres && genres.map((genre, idx) => <button onClick={()=>{onSelectGenre(genre)}} className="bg-zinc-300 hover:bg-zinc-400 p-2 rounded font-medium" key={idx}>{genre}</button>)}
    </div>
    </div>);
};

export default GenreFilter;
