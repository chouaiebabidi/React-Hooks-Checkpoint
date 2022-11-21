import MovieCard from "./MovieCard";
import NewFilm from "./NewFilm";

function MovieList({ text, rate, movieliste, setmovieliste }) {
  return (
    <div>
      <NewFilm movies={movieliste} setmovieliste={setmovieliste} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {movieliste
          .filter(
            (el) => el.name.toLowerCase().includes(text) && el.rating >= rate
          )
          .map((el) => <MovieCard el={el} />)
          .reverse()}
      </div>
    </div>
  );
}

export default MovieList;
