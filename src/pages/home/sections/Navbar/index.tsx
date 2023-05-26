import { Link } from 'react-router-dom';
import { EventHandler, useState } from 'react';
import StNavbar from './styled';
import HamburguerMenu from '../../../../components/rcs_icons/HamburguerMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navitems = ['WhoIam', 'Skills', 'What i do', 'Portfolio', 'Contact'];

  return (
    <StNavbar>
      <div className='container'>
        <HamburguerMenu
          className='hamb-menu-btn'
          aria-roledescription='hamburger menu button'
          aria-label='button to open menu'
          size={46}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <div className='logo-container'>
          <Link to='/'>Rondineli Brito</Link>
        </div>
        <nav className={menuOpen ? 'show' : ''}>
          <ul>
            {navitems.map((item, i) => (
              <li key={i}>
                <a href={`#${item.split(' ').join('-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </StNavbar>
  );
};

export default Navbar;
