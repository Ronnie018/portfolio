import StFooter from './styled';

import {
  FiInstagram as Instagram,
  FiGithub as Github,
  FiLinkedin as LinkedIn,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <StFooter>
      <div className='social'>
        <a href='#'>
          <Instagram size={30} strokeWidth={0.6} className='icon' />
        </a>
        <a href='http://linkedin.com/in/rondinelibrito'>
          <LinkedIn size={30} strokeWidth={0.6} className='icon' />
        </a>
        <a href='http://github.com/ronnie018'>
          <Github size={30} strokeWidth={0.6} className='icon' />
        </a>
      </div>
      <p>&copy; 2023 - Rondineli Brito - All rights reserved.</p>
    </StFooter>
  );
};

export default Footer;
