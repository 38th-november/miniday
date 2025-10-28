import Header from '../components/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../styles/mainLayout.scss';

function MainLayout() {
  return (
    <div className='app-layout'>
      <div className='app-container'>
        <Header />
        <main className='main-content'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
