import styled from 'styled-components';

const StSkills = styled.div`
  height: max(70vh, 700px);
  background-color: #000000;

  & *::selection {
    background-color: #989898;
    color: #000;
  }
  & * {
    font-family: 'Jetbrains Mono', monospace;
  }
  .container {
    padding-top: 3rem;
    .header {
      position: relative;
      width: 100%;
      height: 80px;
      display: flex;
      overflow: hidden;
      align-items: center;
      background-color: #007792;
      h1 {
        margin-left: 6rem;
        font-size: 3rem;
        color: white;
        font-size: 400;
      }
    }
    .skills-container {
      padding: 8rem 0;
      max-width: 100vw;
      overflow-x: hidden;
      .skills {
        transition: 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
        display: flex;
        column-gap: 2rem;
        animation-name: move;
        animation-duration: 80s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-direction: alternate;
        animation-fill-mode: both;
      }
    }
    .description {
      position: absolute;
      max-width: 98vw;
      left: 0;
      right: 0;
      color: #9d7b00;
      text-transform: uppercase;
      transform: scaleX(0) scaleY(0.5);
      visibility: hidden;
      text-align: center;
      margin: 0 auto;
      font-size: 1.2rem;
      font-weight: 600;
      transition: 400ms ease-in-out;
      &.show {
        transform: scale(1);
        visibility: visible;
      }
    }
  }
  @keyframes move {
    0% {
      transform: translateX(25px);
    }
    100% {
      transform: translateX(
        -${({ width }: { width: number }) => (width ? width : 0)}px
      );
    }
  }

  @media (max-width: 900px) {
    .container {
      .header {
        h1 {
          margin-left: 2rem;
        }
      }
    }
  }
  @media (max-width: 820px) {
    .container {
      .header {
        height: 100px;
        h1 {
          font-size: 1.8rem;
          margin-left: 1rem;
          line-height: 2.5rem;
        }
      }
    }
  }
`;

export default StSkills;
