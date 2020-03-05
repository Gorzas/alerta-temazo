import React from 'react';
import styled from 'styled-components';

import Logo from '../images/alerta-temazo.jpg';

const Header = styled.header`
  max-height: 100px;
`;

const Img = styled.img`
  height: 100%;
`;

export default () => {
  return (
    <Header>
      <a href="/"><Img src={Logo} alt="Alerta Temazo" /></a>
    </Header>
  )
};
