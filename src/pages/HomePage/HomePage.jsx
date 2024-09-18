import { lazy, useEffect, useState } from "react";
import { getTrendingMovies } from "../../api";
import css from "./HomePage.module.css";

const MovieList = lazy(() => import("../../components/MovieList/MovieList"));
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [trendMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const trending = await getTrendingMovies();
        setTrendingMovies(trending);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <section className={css.box}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList data={trendMovies} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </section>
  );
}