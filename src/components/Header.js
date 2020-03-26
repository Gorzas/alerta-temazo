import React from 'react';
import styled from 'styled-components';

import Logo from '../images/alerta-temazo.png';

const A = styled.a`
  display: inline-block;
`;

const Header = styled.header`
  background: #FDE700;
  padding-top: 2rem;
  text-align: center;
`;

const Img = styled.img`
  width: 25rem;
`;

export default () => {
  return (
    <Header>
      <A href="/"><Img src={Logo} alt="Alerta Temazo" /></A>
    </Header>
  )
};
