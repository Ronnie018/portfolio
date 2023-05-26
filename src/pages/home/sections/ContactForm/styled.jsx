import styled from 'styled-components';

const EmailForm = styled.form`
  display: flex;

  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    color: #007792;
    margin: 2rem 0;
  }

  label {
    display: block;

    span {
      font-size: 1.6rem;
      color: #b4b4b4;
    }

    input,
    textarea {
      margin-top: 0.4rem;
      margin-bottom: 1rem;
      width: 100%;
      background-color: #cbcbcb75;
      border-radius: 1.6rem;
      min-height: 2rem;
      padding: 0.6rem;
      padding-left: 1.6rem;
      color: white;
    }

    textarea {
      padding: 1.2rem 1.6rem;
      max-height: 300px;
      min-height: 150px;
      resize: vertical;
    }
  }

  .btn-submit{
    background-color: #007792;
    padding: .9rem 2.4rem;
    width: 7.6rem;
    border-radius: 1.2rem;
    display: grid;
    place-items: center;
    font-weight: 600;
    color: white;
    margin: 0 auto;
  }
`;

export default EmailForm;
