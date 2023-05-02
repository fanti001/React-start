import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: center;
  width: 80vw;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
`;

export const Header = () => {
  return <Wrapper>Babcia Jaga na miotle!</Wrapper>;
};
