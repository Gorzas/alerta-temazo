import React from 'react';
import styled from 'styled-components';

import Excerpt from './Excerpt';

const Grid = styled.div`
  background: white;
  display: flex;
`;

const Main = styled.aside`

`;

const Secondaries = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 150px 150px;
  grid-gap: 10px;
`;

export default ({ posts }) => {
  const mainPost = posts.length ?
    posts[0] :
    null;

  return (
    <Grid>
      <Main>
        <Excerpt
          id={mainPost.id}
          post={mainPost}
        />
      </Main>

      <Secondaries>
        {posts && posts.slice(1, 7).map((post, i) => (
          <Excerpt
            id={post.id}
            key={i}
            post={post}
          />
        ))}
      </Secondaries>
    </Grid>
  );
};
