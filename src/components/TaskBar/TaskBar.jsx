import './TaskBar.scss';
import Icon from './Icon';
import icons from '../../static/data/icons';

export default function TaskBar() {
  return (
    <footer className='TaskBar'>
      <div className='bar'>
        {icons.map(({ name }) => <Icon key={name} name={name} />)}
      </div>
    </footer>
  );
}
