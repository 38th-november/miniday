import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import iconAdd from '../assets/icons/icon_add.png';
import '../styles/emptyMain.scss';

function EmptyMain() {
  const navigate = useNavigate();

  return (
    <div className='empty-main-container'>
      <Button
        icon={iconAdd}
        label='할 일을 입력하세요.'
        variant='transparent'
        onClick={() => navigate('/add')}
      />
    </div>
  );
}

export default EmptyMain;
