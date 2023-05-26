import { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Avatar from './avatar';
import StHero, { StContent } from './styled';

const Hero = () => {
  const defs = useRef();
  let count = 0;
  function animate() {
    const list = defs?.current?.children;

    if (list) {
      try {
        for (let elm of list) {
          elm.classList.remove('gold');
        }
        list[count].classList.add('gold');
        if (count < list.length - 1) {
          return count++;
        }
        return (count = 0);
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  let running = false;
  setInterval(() => {
    if (running) return;
    running = true;
    setInterval(animate, 2000);
  }, []);

  return (
    <StHero>
      <Navbar />
      <div className='content'>
        <StContent>
          <div className='left'>
            <div className='hello'>
              <h2>
                <span className='text'>Hello there, i am</span>
                <br />
                <span className='name'>Rondineli Brito.</span>
              </h2>
            </div>
            <div className='mobile-avatar'>
              <Avatar />
            </div>
            <div className='bottom'>
              <div className='mydef'>
                <ul ref={defs}>
                  <li>Problem solver</li>
                  <li className='gold'>Web Developer</li>
                  <li>Freelancer</li>
                </ul>
              </div>
              <div className='contact'>
                <button>Contact</button>
              </div>
            </div>
          </div>
          <div className='avatar'>
            <Avatar />
          </div>
        </StContent>
      </div>
    </StHero>
  );
};

export default Hero;
