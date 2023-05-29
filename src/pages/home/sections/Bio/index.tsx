import StBio from './styled';
import { useRef } from 'react';

const Bio = () => {
  const self = useRef(null);
  const intersecting = true;

  return (
    <StBio id='WhoIam' ref={self}>
      <header className='header'>
        <h2>Who I am</h2>
      </header>
      {intersecting && (
        <div className='container'>
          <div className='left'>
            <div className='text-card'>
              <p className='text'>
                I seek to <span>understand</span> why things matter in the first
                place, in order to <span>motivate</span> myself to always offer{' '}
                <span>the best</span> i can.
              </p>
            </div>
          </div>
          <div className='right'>
            <span className='decor decor-top' />
            <p className='bio'>
              “Creativity shouldn't be ceased by a Stack or a specific
              technology, solutions can came from any source and everyone should
              be prepared to learn from anywhere. Everything we learn will be
              usefull at some point, have a passion for knowledge and you will
              never regret learning something new, even if it has nothing to do
              with your field of knowledge.”
            </p>
            <span className='decor decor-bottom' />
          </div>
        </div>
      )}
    </StBio>
  );
};

export default Bio;
