import styled from 'styled-components';

export const StCarousel = styled.section`
  * {
    transition: 400ms cubic-bezier(0.175, 0.885, 0.32, 1);
    user-select: none;
  }

  position: relative;
  width: 1168px;
  max-width: 98vw;
  margin: auto;
  .container {
    width: 1128px;
    max-width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    .carousel {
      margin: auto;
      height: 500px;
      width: 1028px;
      overflow: hidden;
      .items {
        display: flex;
        height: 500px;
        width: max-content;
        gap: 4rem;
        .item {
          position: relative;
          width: 300px;
          border-radius: 1rem;
          max-width: 100%;
          overflow: hidden;
          &:hover {
            .img-wrapper {
              transform: scaleX(1.08) scaleY(1.08);
            }
            cursor: pointer;
          }
          .img-wrapper {
            height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: 1200ms cubic-bezier(0.175, 0.885, 0.3, 0.85);
          }
          span.title {
            position: absolute;
            background-color: #ffffff;
            color: #323232;
            border-radius: 100vmax;
            padding: 5px 10px;
            left: 0;
            box-shadow: 1px 1px 5px #04677d64;
            text-align: center;
            right: 0;
            bottom: 20px;
            margin: auto;
            max-width: 250px;
          }
          .status {
            display: flex;
            position: absolute;
            top: 1rem;
            left: 0;
            left: 1rem;
            gap: .6rem;
          }
          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            position: absolute;
            background-color: #32323269;
            top: 4rem;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: max-content;
            padding: 0.2rem;
            max-width: 100%;

            justify-content: center;

            span {
              padding: 0.2rem 0.6rem;
              border-radius: 1rem;
              display: grid;
              place-items: center;
            }
          }
        }
      }
    }
  }

  .move-button {
    width: 1rem;
    height: 80px;
    background-color: #1ab2d4;
    border-radius: 100vmax;
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
    &:hover {
      transform: translateY(-52%) scale(1.06, 1.01);
      cursor: pointer;
      background-color: #34bcd4;
    }
    &:active {
      transform: translateY(-49%);
    }
  }

  .navegation {
    position: absolute;
    color: #1ab2d4;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  @media (max-width: 1250px) {
    overflow: hidden;
  }
  @media (max-width: 1060px) {
    .container {
      width: 668px;
      .carousel {
        .items {
          transform: translateX(-364px);
          .item {
          }
        }
      }
    }
    @media (max-width: 690px) {
      .container {
        width: 270px;
        .carousel {
          .items {
            gap: calc(4rem + 30px);
            .item {
              width: 270px;
            }
          }
        }
      }
    }
  }
`;

export default StCarousel;
