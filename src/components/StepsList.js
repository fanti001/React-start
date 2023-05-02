import React from 'react';
import styled from 'styled-components';
import { steps } from 'data/steps';
import { StepsListItem } from './StepsListItem';

const Wrapper = styled.ul`
  list-style-type: none;
  margin-left: 50px;
  padding: 0;
`;

export const StepsList = () => (
  <div>
    <Wrapper>
      {steps.map((stepsData) => (
        <StepsListItem stepsData={stepsData} />
      ))}
    </Wrapper>
  </div>
);
