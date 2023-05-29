import { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Avatar from './avatar';
import StHero, { StContent } from './styled';

const Hero = () => {
  const defs = useRef(null);
  let count = 0;
  function animate() {
    const list: any = (defs?.current as HTMLElement | null)?.children;

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
      } catch (e: Error | any) {
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
      <header className='content'>
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
                <a href='#Contact' className='contact-btn'>
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className='avatar'>
            <Avatar />
          </div>
        </StContent>
      </header>
    </StHero>
  );
};

export default Hero;
