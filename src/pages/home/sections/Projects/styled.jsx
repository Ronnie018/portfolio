import styled from 'styled-components';

const StProjects = styled.section`
  background-color: #000000;
  height: max-content;
  &,
  * {
    font-family: 'Inter', monospace;
    -webkit-margin-collapse: collapse;
  }
  *::selection {
    background-color: #000000;
    color: #1ab2d4;
  }
  .container {
    padding-bottom: 2rem;
    .header {
      background-color: #1ab2d4;
      width: max-content;
      padding: 1.2rem 2.2rem;
      border-radius: 100vmax;
      margin-bottom: 4rem;
      margin-left: 5rem;
      h2 {
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
  }
  @media (max-width: 900px) {
    .container {
      .header {
        max-width: 100%;
        margin: 0 auto 4rem;
        h2 {
          font-size: 1.7rem;
          font-weight: 900;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .container {
      .header {
        h2 {
          font-size: 1.5rem;
          font-weight: 900;
        }
      }
    }
  }
`;

export default StProjects;
