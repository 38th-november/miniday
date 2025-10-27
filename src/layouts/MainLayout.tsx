import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import '../styles/mainLayout.scss';

function MainLayout() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
