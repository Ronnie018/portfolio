import React, { useState } from 'react';
import StTimeline from './styled';

const Timeline = ({ data, color, setToolTip }) => {
  return (
    <StTimeline color={color}>
      <div>
        {data.map(({ year, items }) => {
          return (
            <div className='period-container' key={year}>
              <div className='period'>{year}</div>
              <div className='timeline'></div>
              <div className='items'>
                {items.map((item, i) => {
                  const value =
                    item.length > 10 ? item.slice(0, 10).trim() + '...' : item;
                  return (
                    <div className='item' key={year + '-' + i}>
                      <span
                        onMouseOver={(e) => {
                          setToolTip(() => year + ' - ' + item);
                        }}
                        onMouseOut={(e) => {
                          setToolTip(() => null);
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </StTimeline>
  );
};

export default Timeline;
