import { useEffect } from 'react';
import ReactModal from 'react-modal';

import './Window.scss';

export default function Window({ onClose }) {
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keyup', close);
    return () => window.removeEventListener('keyup', close);
  }, []);

  const handleClickCancel = () => {
    onClose();
  };

  return (
    <ReactModal isOpen className="Window">
      <div>
        모달입니다.
      </div>
      <div>
        <button onClick={handleClickCancel}>X</button>
      </div>
    </ReactModal>
  );
}
