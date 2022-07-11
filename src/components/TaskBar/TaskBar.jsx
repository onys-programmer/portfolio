import './TaskBar.scss';
import ShortCutIcon from './ShortCutIcon';
import ShortCutKey from './ShortCutKey';

import icons from '../../static/data/icons';
export default function TaskBar() {
  return (
    <footer className='TaskBar'>
      <div className='short-cut-keys'>
        {icons.map(icon => <ShortCutKey key={icon["key"]} icon={icon} />)}
      </div>
      <div className='short-cut-icons'>
        {icons.map(icon => <ShortCutIcon key={icon["name"]} icon={icon} />)}
      </div>
    </footer>
  );
}
