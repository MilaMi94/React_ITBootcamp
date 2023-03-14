import React, { useEffect, useReducer } from "react";
import axios from "axios";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import Loading from "../components/Loading/Loading";
import MoviesList from "../components/Movies/MoviesList";
import Search from "../components/Search/Search";
import { reducer, initialState } from "../reducer/reducer";
import API from "../config/api";
import { apiKey } from "../config/apiKey";
import { SEARCH_MOVIES_FAILED, SEARCH_MOVIES_SUCCESS } from "../reducer/types";
// const [state, dispatch] = useReducer(reducer, initialState, init?);

const HomeView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { movies, errorMessage, loading } = state;

  // http://www.omdbapi.com/?s=MOVIE&apikey=APIKEY
  const handleMovieSearch = (movie) => {
    // http://www.omdbapi.com/?s=batman&apikey=APIKEY
    API.get(`?s=${movie}&${apiKey}`).then((res) => {
      console.log(res.data);
      if (res.data.Response === "True") {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIES_FAILED,
          payload: res.data.Error,
        });
      }
    });
  };

  useEffect(() => {
    handleMovieSearch("spiderman");
  }, []);

  return (
    <div>
      <h2>Home View</h2>
      <Search onSubmit={handleMovieSearch} />
      <div>
        {loading && !errorMessage ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMsg>{errorMessage}</ErrorMsg>
        ) : (
          <MoviesList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default HomeView;
