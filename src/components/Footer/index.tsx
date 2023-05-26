import styled from 'styled-components';

import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/all';

const StFooter = styled.footer`
  font-family: Inter, sans-serif;
  background-color: #000;
  width: 100%;
  padding: 2rem 0;
  color: #19d5ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .social {
    display: flex;
    justify-content: center;
    gap: 0.8rem;

    a {
      color: #19d5ff;
    }

    .icon {
      &:hover {
        stroke-width: 1.2;
      }
    }
  }

  p {
    text-align: center;
    font-weight: 100;

    &::selection {
      background-color: #fafafa;
      color: #000000;
      font-weight: 300;
    }
  }
`;

const Footer = () => {
  return (
    <StFooter>
      <div className='social'>
        <a href='#'>
          <FiInstagram size={30} strokeWidth={0.6} className='icon' />
        </a>
        <a href='http://linkedin.com/in/rondinelibrito'>
          <FiLinkedin size={30} strokeWidth={0.6} className='icon' />
        </a>
        <a href='http://github.com/ronnie018'>
          <FiGithub size={30} strokeWidth={0.6} className='icon' />
        </a>
      </div>
      <p>&copy; 2023 - Rondineli Brito - All rights reserved.</p>
    </StFooter>
  );
};

export default Footer;
