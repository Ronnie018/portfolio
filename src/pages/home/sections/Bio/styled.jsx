import styled from 'styled-components';

const StBio = styled.div`
  height: max-content;
  background-image: url(/images/texture.png);
  padding: 5rem;

  & *::selection {
    background-color: #989898;
    color: #000;
    font-family: 'Rubik', sans-serif;
  }

  .container {
    height: 100%;
    display: grid;
    transition: 500ms ease-in-out;

    grid-template-columns: minmax(370px, 1.2fr) minmax(350px, 2fr);
    grid-template-rows: auto;
    gap: 9rem;

    .left {
      * {
        font-family: 'Julius Sans One';
      }

      background-color: #383838;
      border: 2px solid #00667d;
      padding: 2rem;
      max-width: 100%;
      .text-card {
        display: flex;
        align-items: center;
        height: 100%;

        .text {
          text-align: center;
          margin: auto;
          font-size: 2.6rem;
          color: #bbbbbb;
          span {
            color: #00667d;
          }
        }
      }
    }
    .right {
      padding: 4rem 2rem;
      position: relative;
      .decor {
        display: block;
        &::after,
        &::before {
          content: '';
          background-color: #9d7b00;
          position: absolute;
          width: 100%;
          z-index: 2;
          width: 50px;
          height: 50px;
        }
      }

      .decor-top {
        &::after,
        &::before {
          transition: cubic-bezier(0.075, 0.82, 0.165, 1);
          animation: float 3s infinite alternate;
        }
        &::before {
          height: 80px;
          width: 6px;
          top: 0;
          left: 0;
        }
        &::after {
          height: 6px;
          width: 50px;
          top: 0;
          left: 0;
        }
      }
      .decor-bottom {
        &::after,
        &::before {
          transition: cubic-bezier(0.075, 0.82, 0.165, 1);
          animation: float_reverse 3s infinite alternate;
        }
        &::before {
          height: 80px;
          width: 6px;
          bottom: 0;
          right: 0;
        }
        &::after {
          height: 6px;
          width: 50px;
          bottom: 0;
          right: 0;
        }
      }
      .bio {
        font-size: 2.2rem;
        color: #dddddd;
        font-family: 'Rubik', sans-serif;
        text-align: justify;
        font-weight: 300;
      }

      @keyframes float {
        0% {
          transform: translateX(0) translateY(0);
        }
        100% {
          transform: translateX(4px) translateY(4px);
        }
      }
      @keyframes float_reverse {
        0% {
          transform: translateX(4px) translateY(4px);
        }
        100% {
          transform: translateX(0) translateY(0);
        }
      }
    }
  }
  /*
    MEDIA QUERIES
  */
  @media screen and (max-width: 1225px) {
    padding: 5rem 2rem;
  }
  @media screen and (max-width: 1150px) {
    .container {
      gap: 5rem;
    }
  }
  @media screen and (max-width: 880px) {
    height: max-content;
    padding: 4rem 0;
    .container {
      height: auto;
      grid-template-columns: minmax(0, 500px);
      grid-template-rows: minmax(0, auto) minmax(0, auto);
      gap: 3rem;
      width: max-content;
      margin: auto;
      max-width: 100%;
      padding: 1rem;
    }
  }
  @media screen and (max-width: 440px) {
    .container {
      .left {
        .text-card {
          .text {
            font-size: 2rem;
            * {
              word-wrap: break-word;
            }
          }
        }
      }
      .right {
        padding: 2rem;
      }
    }
  }
  @media screen and (max-width: 360px) {
    .container {
      .left {
        .text-card {
          .text {
            font-size: 1.6rem;
          }
        }
      }
      .right {
        .decor-top,
        .decor-bottom {
          &::before {
            height: 60px;
            width: 3px;
          }
          &::after {
            height: 3px;
            width: 30px;
          }
        }
        .decor-bottom {
        }
        .bio {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

export default StBio;
