import { useEffect } from 'react';
import StBio from './styled';
import { useRef } from 'react';
import useIntersection from '../../../../Hooks/useIntersection';

const Bio = () => {
  const self = useRef();
  // const intersecting = useIntersection(self, 1);
  const intersecting = true;

  return (
    <StBio id='WhoIam' ref={self}>
      {intersecting && (
        <div className='container'>
          <div className='left'>
            <div className='text-card'>
              <span className='text'>
                I seek to <span>understand</span> why things matter in the first
                place, in order to <span>motivate</span> myself to always offer{' '}
                <span>the best</span> i can.
              </span>
            </div>
          </div>
          <div className='right'>
            <span className='decor decor-top' />
            <div className='bio'>
              “Sit iure sapiente aut aliquid corporis qui quas eaque et dicta
              odit et molestias placeat ex culpa fugit est quidem quidem? Ut
              internos sint eos aliquid sapiente ut reiciendis itaque. Est alias
              facilis qui sunt omnis in possimus ipsam in quia delectus? Quo
              iste corporis aut similique commodi est facilis sint ab dolor
              autem sed modi autem vel rerum doloremque et recusandae
              aspernatur.”
            </div>
            <span className='decor decor-bottom' />
          </div>
        </div>
      )}
    </StBio>
  );
};

export default Bio;
