import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
const Nav = lazy(() => import("../Nav/Nav"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));

const Home = lazy(() => import("../../pages/HomePage/HomePage"));
const Movies = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFound = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

