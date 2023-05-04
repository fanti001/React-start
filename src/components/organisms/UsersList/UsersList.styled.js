import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 20px 30px 20px 0px;
  border-radius: 15px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
