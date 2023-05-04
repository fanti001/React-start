import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.darkGrey};
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
  p:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 19px;
    font-weight: bold;
    margin-bottom: 0%;
    margin-top: 30px;
  }
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 12px;
    margin-top: 0%;
    margin-bottom: 30px;
  }
`;
