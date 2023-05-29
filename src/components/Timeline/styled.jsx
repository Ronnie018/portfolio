import styled from 'styled-components';

const StTimeline = styled.div`
  height: 90%;
  max-width: 380px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
  &,
  * {
    color: ${(props) => props.color};
    font-family: 'JetBrains Mono', monospace;
  }

  .period-container {
    display: flex;
    justify-content: start;
    height: 100%;

    .period {
      flex: 1 1;
      font-size: 1.8rem;
      padding: 15px 15px;
      font-weight: 200;
    }

    .timeline {
      flex: 1 1;
      width: 0.5px;
      min-height: 100%;
      background-color: #ab8500;
      margin-left: 10px;
    }
    .items {
      flex: 1 1 250px;
      .item {
        position: relative;
        margin: 35px 0;
        li {
          margin-left: 56px;
          &:hover {
            color: #e1b000;
          }
        }

        &::before {
          content: '';
          background-color: #ab8500;
          z-index: -1;
          width: 50px;
          height: 1px;
          position: absolute;
          top: 45%;
          left: 0;
        }
      }
    }
  }

  @media screen and (max-width: 940px) {
    max-width: 100%;
    .period-container {
      .period {
        font-size: 2.4rem;
      }
      .items {
        .item {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    height: max(100vh, 700px);
    .period-container {
      .period {
        font-size: 2rem;
      }
      .items {
        .item {
          font-size: 1.8rem;
        }
      }
    }
  }
  @media screen and (max-width: 460px) {
    .period-container {
      .period {
        font-size: 1.6rem;
      }
      .items {
        .item {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default StTimeline;
