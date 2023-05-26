import styled from 'styled-components';
import { VscGithub } from 'react-icons/all';

const StyledAvatar = styled.div`
  display: flex;
  @keyframes moveshadow {
    from {
      box-shadow: 142px 4px 0px 216px rgba(69, 68, 68, 0.25);
    }
    to {
      box-shadow: 142px 4px 0px 226px rgba(189, 186, 186, 0.149);
    }
  }

  .img-wrapper {
    max-width: 100%;
    width: 400px;
    height: 400px;
    max-width: 90vw;
    max-height: 90vw;
    background-image: url(./images/hero_image.png);
    background-position: center;
    background-size: cover;
    border-radius: 100vmax;
    box-shadow: 142px 4px 0px 226px rgba(189, 186, 186, 0.149);
    border: 8px solid #1ab2d4;
    transition: 400ms ease-in-out;
    animation: moveshadow 3000ms infinite alternate;
    overflow: hidden;
    &:hover {
      border: 8px solid #12758b;
      box-shadow: 142px 4px 0px 206px rgba(122, 122, 122, 0.076);
      .text {
        bottom: 10px;
      }
    }
    position: relative;
    .text {
      transition: 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      font-size: 1.1rem;
      align-items: center;
      width: min-content;
      height: min-content;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -100px;
      color: white;
      margin: 0 auto;

      * {
        transition: 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      &:hover {
        svg,
        path {
          color: #696969;
          transform: scale(0.97);
        }
      }
      &:active {
        svg,
        path {
          color: #ababab;
          transform: scale(0.95);
        }
      }
    }
  }
  @media (max-width: 950px) {
    .img-wrapper {
      width: 320px;
      height: 320px;
      box-shadow: none;
      animation: none;
    }
  }
  @media (max-width: 887px) {
    .img-wrapper {
      width: 400px;
      height: 400px;
      box-shadow: none;
      animation: none;
    }
  }
  @media (max-width: 887px) {
    .img-wrapper {
      max-width: 75vw;
      max-height: 75vw;
    }
  }
`;

const Avatar = () => {
  return (
    <StyledAvatar>
      <div className='img-wrapper'>
        <div className='text'>
          <a
            className='icon'
            target={'_blank'}
            href='https://github.com/ronnie018'
          >
            <VscGithub size={50} color='#efefef' />
          </a>
        </div>
      </div>
    </StyledAvatar>
  );
};

export default Avatar;
