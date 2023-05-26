import { useState, useRef } from 'react';
import StExperience from './styled';
import Timeline from '../../../../components/Timeline';
import data from './experience.json';
import useIntersection from '../../../../Hooks/useIntersection';

const Experience = () => {
  const self = useRef();
  const intersecting = useIntersection(self, 1, () => {
    console.log('testing');
  });
  const [item, setItem] = useState(null);
  const { timeline, certifications } = data;

  return (
    <StExperience ref={self}>
      {intersecting && (
        <>
          <div className={`tooltip ${item && 'active'}`}>{item}</div>
          <div className='container' id='What-i-do'>
            <div className='timeline-container'>
              <Timeline data={timeline} color='#ffffff' setToolTip={setItem} />
            </div>
            <div className='certs-container'>
              <div className='certifications'>
                <h1>Certifications</h1>
                <ul>
                  {certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </StExperience>
  );
};

export default Experience;
