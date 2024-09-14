import React, { useState } from "react";
import "./App.css";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";

const movies = [
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { title: "The Godfather", genre: "Crime", year: 1972 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "12 Angry Men", genre: "Drama", year: 1957 },
  { title: "Schindler's List", genre: "Drama", year: 1993 },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", genre: "Western", year: 1966 },
  { title: "Forrest Gump", genre: "Drama", year: 1994 },
  { title: "Inception", genre: "Science Fiction", year: 2010 },
  { title: "The Matrix", genre: "Science Fiction", year: 1999 },
  { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
  { title: "Saving Private Ryan", genre: "War", year: 1998 },
  { title: "Jurassic Park", genre: "Science Fiction", year: 1993 },
  { title: "Terminator 2: Judgment Day", genre: "Science Fiction", year: 1991 },
  { title: "The Lion King", genre: "Animation", year: 1994 },
];

const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];

const App = () => {

  const [selectedGenre, setSelectedGenre] = useState(genres)
  const [moviesList, setMoviesList] = useState(movies)

  const handleGenre = (genre) => {
    setSelectedGenre(genre)
    console.log(`Filtering by ${genre}`);
    const filteredMovies = movies.filter((movie)=>movie.genre === genre)
    setMoviesList(filteredMovies)
  }

  return <div className="box-border md:mx-14 md:my-10">
    <h1 className="text-center font-bold text-2xl mb-6">Top 15 Movies of All Time</h1>
    <GenreFilter genres={genres} onSelectGenre={handleGenre} />
    <MovieList movies={moviesList}/>
  </div>;
};

export default App;
