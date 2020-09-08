import React from 'react';
import { Pane, LayoutAutoIcon, Button, Badge, FilmIcon } from 'evergreen-ui';
import { Route, Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { MovieName } from './MovieName';

export const MovieItem = ({ id, title, contents, src, runtime }) => {
  console.log(id);
  return (
    <Pane
      elevation={3}
      float="left"
      width={280}
      height={500}
      overflow="scroll"
      margin={24}
      padding={4}
      display="flex"
      justifyContent="auto"
      alignItems="auto"
      flexDirection="column"
    >
      <Route path="/MovieName" component={MovieName} />

      <MainMovieimg src={src} alt="영화썸네일"></MainMovieimg>

      <Header>{title}</Header>
      <Subhead height="600px" size={300}>
        <Display>
          <FilmIcon size={12} color="#85a5ff" marginRight={8} />
          {runtime}
          <LayoutAutoIcon
            size={12}
            color="#85a5ff"
            marginRight={8}
            marginLeft={8}
          />
          {contents}
        </Display>
      </Subhead>
      <Button width={264} margin="auto">
        <Link
          to={{
            pathname: `/MovieName/${id}`,
            state: {
              title,
              contents,
              src,
            },
          }}
        >
          <p>상세보기</p>
        </Link>
      </Button>
    </Pane>
  );
};

const Header = styled.span`
  font-size: 20px;
  width: 230px;
  line-height: 26px;
  text-align: left;
  padding: 12px 8px 4px 8px;
`;
const Subhead = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding: 4px 8px;
  text-align: right;
  color: #4e7496;
`;
const Display = styled.div`
  display: contents;
`;
const MainMovieimg = styled.img`
  margin: auto;
  width: 95%;
  margin-top: 2%;
`;
