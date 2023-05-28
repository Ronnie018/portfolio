import StCarousel from './styled.jsx';

import { useState, Key } from 'react';
import { ItemProps } from './CarouselHandler';

import CarouselHandler from './CarouselHandler';
import useWindowSize from '../Hooks/useWindowSize.jsx';
import Tag from './Tag.jsx';
import getImageBySize from '../../utils/getImageBySize';

type CarouselProps = {
  items: ItemProps[];
  setCentered: React.Dispatch<React.SetStateAction<string>>;
};

const Carousel = ({ items, setCentered }: CarouselProps) => {
  const { width } = useWindowSize();
  let moveRate = 364;
  let correction = width ? (width > 1060 ? 1 : 0) : 0;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const carouselHandler = new CarouselHandler({
    currentIndex,
    setCurrentIndex,
    translateValue,
    setTranslateValue,
    setCentered,
    items,
    correction,
    moveRate,
  });

  const handleMoveRight = () => carouselHandler.moveRight();
  const handleMoveLeft = () => carouselHandler.moveLeft();

  return (
    <StCarousel>
      <div className='move-button left' onClick={handleMoveLeft} />
      <div className='container'>
        <div className='carousel'>
          <div
            className='items'
            style={{ transform: `translateX(${translateValue}px)` }}
          >
            {renderItems(items, width as number, setCentered)}
          </div>
        </div>
        <div className='navegation' />
      </div>
      <div className='move-button right' onClick={handleMoveRight} />
    </StCarousel>
  );
};

export default Carousel;

function renderItems(
  items: any,
  width: number,
  setCentered: React.Dispatch<React.SetStateAction<string>>
) {
  if (!items) return null;
  return items.map(
    ({ path, filename, title, url, tags, done, type }: ItemProps, i: Key) => {
      const filepath = getImageBySize(path, filename, width);

      const imageStyle = {
        backgroundImage: `url(${filepath})`,
      };

      return (
        <a
          className='item'
          key={i}
          onPointerOver={() => setCentered(title)}
          href={url}
          target='_blank'
        >
          <div className='img-wrapper' style={imageStyle} />
          <span className='title'>{title}</span>
          <div className='status'>
            {setStatus(done)}
            {setType(type)}
          </div>
          <div className='tags'>{renderTags(tags)}</div>
        </a>
      );
    }
  );
}

function renderTags(tags: string[]) {
  if (!tags) return null;
  return tags.map((tag) => <Tag key={tag} children={tag} />);
}

function setStatus(done: boolean = false) {
  return done ? (
    <img src='/images/svgs/open.svg' width={30} />
  ) : (
    <img src='/images/svgs/close.svg' width={30} />
  );
}

function setType(type: string) {
  return type === 'repo' ? (
    <img src='/images/svgs/repo.svg' width={30} />
  ) : (
    <img src='/images/svgs/web.svg' width={30} />
  );
}
