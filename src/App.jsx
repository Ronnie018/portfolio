import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

const StyledApp = styled.div`
  .card-container {
    outline: 1px solid black;
  }
`;

function App() {
  return (
    <StyledApp className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
