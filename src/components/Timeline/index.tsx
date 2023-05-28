import StTimeline from './styled';
import { TimelineItem, TimelineProps } from './types';
import partialFrom from '../../utils/getPartialText';

const renderTimelineItems = (
  { year, items }: TimelineItem,
  setToolTip: Function
) => {
  return (
    <div className='period-container' key={year}>
      <div className='period'>{year}</div>
      <div className='timeline' />
      <div className='items'>
        {items.map((text, i) => {
          return (
            <div className='item' key={year + '-' + i}>
              <span
                onMouseOver={() => setToolTip(year + ' - ' + text)}
                onMouseOut={() => setToolTip(null)}
              >
                {partialFrom(text)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
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
