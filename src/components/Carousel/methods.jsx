
onMouseDown={(e) => {
  setClickStartPos(e.clientX);
  setMouseDown(() => {
    return true;
  });
}}
onMouseUp={(e) => {
  setMouseDown(() => {
    return false;
  });

  setTranslateValue(() => {
    return translateValue;
  });

  if (e.clientX < clickStartPos) {
    moveRight();
  } else if (e.clientX > clickStartPos) {
    moveLeft();
  }
}}
onMouseMove={(e) => {
  if (mouseDown) {
    static_value = translateValue;
    let diff = Math.abs(e.clientX - clickStartPos);

    if (diff > 20) return;

    if (e.clientX < clickStartPos) {
      setTranslateValue(
        static_value - Math.abs(e.clientX - clickStartPos)
      );
    } else if (e.clientX > clickStartPos) {
      setTranslateValue(
        static_value + Math.abs(e.clientX - clickStartPos)
      );
    }
  }
}}
onMouseLeave={(e) => {
  setMouseDown(() => {
    return false;
  });
  setTranslateValue(() => {
    return translateValue;
  });

  if (e.clientX < clickStartPos) {
    moveRight();
  } else if (e.clientX > clickStartPos) {
    moveLeft();
  }
}}

import { useState } from 'react';

import {
  IoIosArrowBack as LeftArrow,
  IoIosArrowForward as RightArrow,
} from 'react-icons/all';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  outline: 1px solid green;
  width: 400px;
  overflow: hidden;
  position: relative;
  max-height: 300px;
  scroll-snap-type: x mandatory;
  &,
  * {
    user-select: none;
  }

  .slider-wrapper {
    transition: 225ms ease-in-out;
    display: flex;
    width: max-content;
    .slide {
      scroll-snap-align: start;
      position: relative;
      height: min-content;
      aspect-ratio: 4/3;
      .card-text {
        position: absolute;
        bottom: 20px;
        left: 20px;
      }
      img {
        width: 100%;
        pointer-events: none;
      }
    }
  }

  .buttons {
    position: absolute;
    top: 130px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      width: auto;
      height: auto;
      outline: none;
      border: none;
    }
  }
`;

const Carousel = ({ color = '#ffffff' }) => {
  const items = [
    { image: 'https://via.placeholder.com/400x300&text=You', title: 'You' },
    { image: 'https://via.placeholder.com/400x300&text=Are', title: 'Are' },
    { image: 'https://via.placeholder.com/400x300&text=An', title: 'An' },
    {
      image: 'https://via.placeholder.com/400x300&text=Amazing',
      title: 'Amazing',
    },
    {
      image: 'https://via.placeholder.com/400x300&text=Person',
      title: 'Person',
    },
  ];

  // Define state variables for the current index and translateX value
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const [mouseDown, setMouseDown] = useState(false);
  const [clickStartPos, setClickStartPos] = useState(null);

  // Define a function to handle moving the carousel left
  const moveLeft = () => {
    if (currentIndex === 0 || currentIndex > 0) {
      setCurrentIndex(items.length - 1);
      setTranslateValue(-(items.length - 1) * 400);
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue + 400);
    }
  };

  // Define a function to handle moving the carousel right
  const moveRight = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue - 400);
    }
  };

  return (
    <StyledCarousel>
      <div>
        <div
          className='slider-wrapper'
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          {items.map((item, index) => (
            <div className='slide' key={index}>
              <img src={item.image} alt={item.title} />
              <h3 className='card-text'>{item.title}</h3>
            </div>
          ))}
        </div>
        <div className='buttons'>
          <button className='arrow left' onClick={moveLeft}>
            <LeftArrow color={color} size={40} />
          </button>
          <button className='arrow right' onClick={moveRight}>
            <RightArrow color={color} size={40} />
          </button>
        </div>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
