import React from 'react';
import { Pane, StarIcon } from 'evergreen-ui';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { MovieName } from './MovieName';

render() {
    const { MovieName } = this.state;
  
    return (
      <Layout>
        <Sidebar>
         <p>111</p>
          {this.renderMemoList(MovieName)}
        </Sidebar>
        <Main>
        </Main>
      </Layout>
    );
  }
  
  renderMemoList(Movie_id: []) {
    return (
      <ul>
        {memos.map((memo, idx) =>
          <li key={idx}>
            <Link to={`/memo/${movieItem.id}`}>
             
              
            </Link>
          </li>
        )}
      </ul>
    )
  }