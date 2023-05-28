import styled from 'styled-components';

const StFooter = styled.footer`
  font-family: Inter, sans-serif;
  background-color: #000;
  width: 100%;
  padding: 2rem 0;
  color: #19d5ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .social {
    display: flex;
    justify-content: center;
    gap: 0.8rem;

    a {
      color: #19d5ff;
    }

    .icon {
      &:hover {
        stroke-width: 1.2;
      }
    }
  }

  p {
    text-align: center;
    font-weight: 100;

    &::selection {
      background-color: #fafafa;
      color: #000000;
      font-weight: 300;
    }
  }
`;

export default StFooter;
