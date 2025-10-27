import '../styles/header.scss';

import logo from '../assets/images/miniday_black_logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className='header-container'>
        <img src={logo} alt='Miniday Logo' className='header-logo' onClick={() => navigate('/')} />
      </header>
    </>
  );
}

export default Header;
