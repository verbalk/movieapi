import React, { useState, useEffect } from 'react';
import {
  Pane,
  Badge,
  ThumbsUpIcon,
  Button,
  ImportIcon,
  CloudDownloadIcon,
} from 'evergreen-ui';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';
import { useParams } from 'react-router-dom';

export const MovieName = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const getMovieDetail = async () => {
    const response = await axios.get(
      'https://yts.mx/api/v2/movie_details.json',
      {
        params: {
          movie_id: params.id,
        },
      }
    );
    setMovieDetails(response.data.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pane clearfix>
      <LargeCover clearfix>
        {movieDetails && <CoverImage src={movieDetails.large_cover_image} />}
      </LargeCover>

      <TextInfo clearfix>
        {movieDetails && <H2>{movieDetails.year}</H2>}
        {movieDetails && <H1>{movieDetails.title}</H1>}
        <ThumbsUpIcon size={20} marginRight={8} />
        {movieDetails && (
          <Badge
            color="neutral"
            isSolid
            marginRight={8}
            marginBottom={16}
            size={12}
          >
            {movieDetails.like_count}
          </Badge>
        )}
        <CloudDownloadIcon size={20} marginLeft={16} marginRight={8} />
        {movieDetails && (
          <Badge
            color="green"
            isSolid
            marginRight={8}
            marginBottom={16}
            size={12}
          >
            {movieDetails.download_count}
          </Badge>
        )}
        {movieDetails && <Body1>{movieDetails.description_intro}</Body1>}
        {movieDetails && <Body2>{movieDetails.date_uploaded}</Body2>}
        <ImgBox>
          {' '}
          {movieDetails && (
            <CoverImage src={movieDetails.background_image_original} />
          )}
        </ImgBox>

        {movieDetails && (
          <Button rel="torrents" href={movieDetails.torrents.hash}>
            <ImportIcon marginRight={8} /> DownLoad
          </Button>
        )}
      </TextInfo>
    </Pane>
  );
};

const LargeCover = styled.div`
  background: none;
  width: 30%;
  height: 100%;
  float: left;
  padding: 40px;
`;

const CoverImage = styled.img`
  width: 100%;
`;

const TextInfo = styled.div`
  background: none;
  width: 60%;
  height: 100%;
  float: right;
  padding: 40px;
`;

const H1 = styled.div`
  font-size: 36px;
  padding-bottom: 16px;
`;
const H2 = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 16px;
`;
const Body1 = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
  width: 600px;
  line-height: 23px;
`;
const Body2 = styled.div`
  font-size: 12px;
  padding-bottom: 20px;
  width: 600px;
  line-height: 23px;
`;
const ImgBox = styled.div`
  width: 200px;
  height: 100px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const ButtonSmall = styled.button`
  width: 200px;
`;
