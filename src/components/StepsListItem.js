import React from 'react';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  display: relative;
  > p {
    margin-top: 50px;
    position: absolute;
    display: inline;
    margin-left: 50px;
  }
`;
const Img = styled.img`
  width: 50px;
`;

export const StepsListItem = ({ stepsData: { id, title, description } }) => (
  <Wrapper key={id}>
    <Img src={logo} />
    <h2>{title}</h2>
    <p>{description}</p>
  </Wrapper>
);
