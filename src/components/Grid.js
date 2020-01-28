import React from 'react';
import styled from 'styled-components';

import Excerpt from './Excerpt';

const Grid = styled.div`
  display: flex;
`;

export default ({ posts }) => (
  <Grid>
    {posts && posts.slice(0, 7).map((post) => (
      <Excerpt id={post.id} post={post} />
    ))}
  </Grid>
);
