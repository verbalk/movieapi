import React, { useState, useEffect } from 'react';
import { Pane } from 'evergreen-ui';
import axios from 'axios';
import './App.css';

export const MovieName = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const getMovieDetail = async () => {
    const response = await axios.get(
      'https://yts.mx/api/v2/movie_details.json',
      {
        params: {
          movie_id: '',
        },
      }
    );
    setMovieDetails(response.data);
  };
  //https://yts.mx/api/v2/movie_details.json?movie_id=10
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <Pane clearfix>
      {movieDetails &&
        movieDetails.map((movieDetail) => {
          return <movieDetail title={movieDetail.title} />;
        })}
    </Pane>
  );
};
