import useModals from '../../utils/useModals';
import './TaskBar.scss';
import ShortCutIcon from './ShortCutIcon';
import ShortCutKey from './ShortCutKey';
import Window from '../modals/Window';
import icons from '../../static/data/icons';
import { useEffect } from 'react';

export default function TaskBar() {
  const { openModal } = useModals();

  useEffect(() => {
    const open = ({ key }) => {
      if ('spkci'.includes(key)) {
        openModal(Window, { name: { key } });
      }
    };
    window.addEventListener('keyup', open);
    return () => window.removeEventListener('keyup', open);
  }, []);

  const handleClick = () => {
    openModal(Window, { foo: 'bar' });
  };

  return (
    <footer className='TaskBar'>
      <div className='short-cut-keys'>
        {icons.map(icon => <ShortCutKey key={icon["shortCutKey"]} icon={icon} />)}
      </div>
      <div className='short-cut-icons'>
        {icons.map(icon =>
          <ul key={icon["name"]} className='short-cut-icon' onClick={handleClick}>
            <ShortCutIcon icon={icon} />
          </ul>
        )
        }
      </div>
    </footer>
  );
}
