import '../styles/header.scss';

import logo from '../assets/images/miniday_black_logo2.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  console.log('Header rendered!');

  return (
    <>
      <header className='header-container'>
        <img src={logo} alt='Miniday Logo' className='header-logo' onClick={() => navigate('/')} />
      </header>
    </>
  );
}

export default Header;
