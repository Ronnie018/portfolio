import styled from 'styled-components';

const StContact = styled.div`
  background-color: #000000;
  min-height: 100vh;
  padding: 3rem;

  font-family: 'Inter', sans-serif;

  .container {

    min-height: 86vh;
    background-color: #101010;
    display: grid;
    max-width: calc(100%);
    padding: 3rem;
    grid-gap: 2rem;

    grid-template-columns: 1fr 2fr;

    .description {
      max-width: 260px;
      margin: 2rem auto;
      p {
        font-size: 1.8rem;
        color: #e7e7e7;
        font-weight: 100;
        line-height: 124%;
      }
    }

    .form-container {
      display: flex;
    }
  }

  @media screen and (max-width: 850px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: auto;

      grid-template-areas: 'form' 'description';

      .description {
        grid-area: description;
        max-width: unset;
        width: 100%;
      }

      .form-container {
        grid-area: form;
      }
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
    
    .container{
      padding: 2rem;
    }
  }
`;

export default StContact;
