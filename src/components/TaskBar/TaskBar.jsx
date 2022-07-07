import './TaskBar.scss';
import ShortCutIcon from './ShortCutIcon';
import icons from '../../static/data/icons';

export default function TaskBar() {
  return (
    <footer className='TaskBar'>
      <div className='bar'>
        {icons.map(icon => <ShortCutIcon key={icon["name"]} icon={icon} />)}
      </div>
    </footer>
  );
}
