import React from 'react';
import styled from 'styled-components';
import { StepsList } from './StepsList';

const Wrapper = styled.div`
  align-self: center;
  width: 80vw;
  background-color: white;
  border-radius: 25px;
  box-shadow: 10px 10px grey;
  padding-bottom: 20px;
`;

export const Box = () => {
  return (
    <Wrapper>
      <StepsList />
    </Wrapper>
  );
};
