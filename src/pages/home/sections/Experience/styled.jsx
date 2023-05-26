import styled from 'styled-components';

const StExperience = styled.div`
  height: max-content;
  background-image: linear-gradient(
      180deg,
      #36363600 5%,
      #36363638 36.71%,
      #0000003d 70.12%,
      #000000 100%
    ),
    url(/images/texture.png);
  padding: 0 5rem;

  & *::selection {
    background-color: #989898;
    color: #000;
    font-family: 'Rubik', sans-serif;
  }
  .tooltip {
    position: fixed;
    bottom: 70px;
    right: 0;
    left: 0;
    margin: 0 auto;
    max-width: 280px;
    z-index: 5;
    color: #ffffff;
    padding: 14px;
    border-radius: 5px;
    text-align: center;
    display: block;
    font-family: 'JetBrains Mono', monospace;
    background-color: #ab8500;
    opacity: 1;
    transform: translateY(100px);
    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &.active {
      transform: translateY(0);
    }
    @keyframes appear {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: minmax(270px, 1fr) minmax(270px, 1.6fr);
    grid-gap: 2rem;
    justify-items: center;

    .timeline-container {
      max-width: 100%;
    }

    .certs-container {
      max-width: 100%;
      margin-left: 4rem;
      &,
      * {
        font-family: 'Jaldi', sans-serif;
      }
      .certifications {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin-top: 2rem;
        min-height: 100%;
        h1 {
          font-size: 5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          background: linear-gradient(
            270deg,
            #1ab2d4 2.93%,
            rgba(40, 36, 19, 0.12) 120.61%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        ul {
          list-style: none;
          list-style-position: inside;
          text-indent: 20px;
          li {
            margin: 2rem 0;
            color: #cbcbcb;
            font-size: 2rem;
            font-weight: 400;
            &:before {
              content: '• ';
              font-size: 30px;
              margin-right: 8px;
            }
            &:hover{
              color: #E1B000;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1090px) {
    .container {
      .certs-container {
        .certifications {
          ul {
            li {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 940px) {
    padding: 0;
    .container {
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr;
      .certs-container {
        margin: 0 auto;
        .certifications {
          h1 {
            font-size: 4rem;
            text-indent: 1rem;
          }
          ul {
            li {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    .container {
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr;
      .certs-container {
        margin: 0 auto;
        .certifications {
          h1 {
            font-size: 3rem;
            text-indent: 0.6rem;
          }
          ul {
            li {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
`;

export default StExperience;
