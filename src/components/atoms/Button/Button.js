import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0 15px 25px;
  padding: 8px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
