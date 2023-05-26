import styled from 'styled-components';

const StHero = styled.div`
  min-height: 100vh;
  background-color: grey;
  background-image: url(./images/bg_tech.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &,
  *::selection {
    color: #00d0ff;
    background-color: #000000;
    font-family: 'Rubik', sans-serif;
  }
  .content {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
  }
  @media (max-width: 887px) {
    background-image: url(./images/texture.png);
    .content {
      align-items: flex-start;
    }
  }
`;

export const StContent = styled.div`
  max-width: 100%;
  width: 1130px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 2rem;
  padding-top: 2rem;

  .left {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .hello {
      h2 {
        line-height: 4rem;
        .text {
          font-size: 4.2rem;
          font-weight: 200;
          color: #ffffff;
        }
        .name {
          font-size: 3.8rem;
          font-weight: 500;
          color: #1ab2d4;
        }
      }
    }
    .mobile-avatar {
      display: none;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      @keyframes blink {
        from {
          border-color: #ededed;
        }
        25% {
          border-color: #3a1b1b;
        }
        to {
          border-color: #232323;
        }
      }
      .mydef {
        ul {
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
          &:hover {
            .gold {
              color: #00d0ff;
              transform: scale(1);
              font-weight: 100;
            }
          }

          li {
            color: #00d0ff;
            font-size: 1.4rem;
            font-weight: 100;
            user-select: none;
            transition: 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
            &.gold {
              color: #dbab00;
              transform: scale(1.01);
              font-weight: 300;
              &:hover {
                color: #dbab00;
                transform: scale(1.01);
                font-weight: 300;
              }
            }
            &:hover {
              color: #dbab00;
              transform: scale(1.01);
              font-weight: 300;
            }
          }
        }
      }
      .contact {
        @keyframes colorchange {
          from {
            color: #3a1b1b;
            background-color: #0d6fa0;
          }
          20% {
            background-color: #6e5a13;
            color: #16383f;
          }
          to {
            background-color: black;
            color: #1e7d92;
          }
        }

        button {
          font-size: 1.2rem;
          padding: 0.9rem 1.4rem;
          background-color: #1ab2d4;
          border-radius: 5px;
          cursor: pointer;
          user-select: none;
          &:hover {
            background-color: black;
            color: #1e7d92;
            animation: 100ms colorchange;
            transform: scale(0.99);
          }
        }
      }
    }
  }
  @media (max-width: 887px) {
    align-items: flex-start;
    & > * {
      margin: 0 auto;
    }
    .left {
      height: min-content;
      justify-content: flex-start;
      width: 96%;
      row-gap: 4rem;
      .mobile-avatar {
        display: initial;
        margin: 0 auto;
      }
      .hello {
        padding-top: 3rem;
        h2 {
          text-align: center;
          .text {
            font-size: 3.4rem;
            line-height: 0.5rem;
          }
          .name {
            font-size: 3rem;
          }
        }
      }
      .bottom {
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
        row-gap: 3.5rem;
        .mydef {
          ul {
            li {
              text-align: center;
            }
          }
        }
        .contact {
          button {
            font-size: 1.5rem;
            padding: 1.1rem 1.6rem;
          }
        }
      }
    }

    .avatar {
      display: none;
    }
  }
`;

export default StHero;
