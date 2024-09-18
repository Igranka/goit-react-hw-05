import { Toaster } from "react-hot-toast";
import { getSearchMovies } from "../../api";
import { useEffect, useState, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import ErrorMsg from "../../components/ErrorMessage/ErrorMessage";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

export default function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParms, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const searchedMovies = await getSearchMovies(
          searchQuery || searchParms.get("query")
        );
        setSearchedMovies(searchedMovies.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchQuery, searchParms]);

  const handleSearch = async (prompt) => {
    setSearchQuery(prompt);
    searchParms.set("query", prompt);
    setSearchParams(searchParms);
  };

  return (
    <section className={css.box}>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {searchedMovies.length > 0 && <MovieList data={searchedMovies} />}
      {loading && <Loader />}
      {error && <ErrorMsg />}
    </section>
  );
}