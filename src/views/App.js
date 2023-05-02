import './App.css';

import { Header } from 'components/Header';
import { Box } from 'components/Box';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: lightgrey;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Box />
      </Wrapper>
    </>
  );
}

export default App;
