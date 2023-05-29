import StTimeline from './styled';
import { TimelineItem, TimelineProps } from './types';
import partialFrom from '../../utils/getPartialText';

const renderTimelineItems = (
  { year, items }: TimelineItem,
  setToolTip: Function
) => {
  return (
    <article title='learning timeline' className='period-container' key={year}>
      <header className='period'>
        <h3>{year}</h3>
      </header>
      <div className='timeline' />
      <div className='items'>
        {items.map((text, i) => {
          return (
            <ul
              className='item'
              key={year + '-' + i}
              title={year + "'s timeline"}
            >
              <li
                onMouseOver={() => setToolTip(year + ' - ' + text)}
                onMouseOut={() => setToolTip(null)}
                title={text}
              >
                {partialFrom(text)}
              </li>
            </ul>
          );
        })}
      </div>
    </article>
  );
};

const Timeline = ({ data, color, setToolTip }: TimelineProps) => {
  return (
    <StTimeline color={color}>
      <div>
        {data.map(({ year, items }) =>
          renderTimelineItems({ year, items }, setToolTip)
        )}
      </div>
    </StTimeline>
  );
};

export default Timeline;
