import { Key, useState } from 'react';
import useWindowSize from '../Hooks/useWindowSize.jsx';
import StCarousel from './styled.jsx';
import Tag from './Tag.jsx';

const Carousel = ({ items, setCentered }: any) => {
  const { width } = useWindowSize();
  let moveRate = 364;
  let correction = width ? (width > 1060 ? 1 : 0) : 0;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const moveLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
      setTranslateValue(-(items.length - 1) * moveRate);
      setCentered(() => items[items.length - (1 - correction)]?.title);
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue + moveRate);
      setCentered(() => items[currentIndex - (2 - correction)]?.title);
    }
  };

  const moveRight = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
      setCentered(() => items[0 + correction]?.title);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue - moveRate);
      setCentered(() => items[currentIndex + (1 + correction)]?.title);
    }
  };

  return (
    <StCarousel>
      <div className='move-button left' onClick={moveLeft} />
      <div className='container'>
        <div className='carousel'>
          <div
            className='items'
            style={{ transform: `translateX(${translateValue}px)` }}
          >
            {items &&
              items.map(
                ({ path, filename, title, url, tags }: ItemProps, i: Key) => {
                  const filepath = getImageBySize(
                    path,
                    filename,
                    width as number
                  );

                  return (
                    <a
                      className='item'
                      key={i}
                      onPointerOver={() => {
                        setCentered(() => title);
                      }}
                      href={url}
                      target='_blank'
                    >
                      <div
                        className='img-wrapper'
                        style={{
                          backgroundImage: `url(${filepath})`,
                        }}
                      />
                      <span className='title'>{title}</span>
                      <div className='tags'>
                        {tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </a>
                  );
                }
              )}
          </div>
        </div>
        <div className='navegation' />
      </div>
      <div className='move-button right' onClick={moveRight} />
    </StCarousel>
  );
};

export default Carousel;

function getImageBySize(path: string, filename: string, width: number) {
  return (
    path +
    (width
      ? width < 950
        ? 'MD_' + filename
        : 'LG_' + filename
      : 'MD_' + filename)
  );
}

type ItemProps = {
  path: string;
  filename: string;
  title: string;
  url: string;
  tags: string[];
};