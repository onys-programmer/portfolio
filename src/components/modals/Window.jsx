import ReactModal from 'react-modal';

import './Window.scss';

export default function Window({ onClose }) {
  const handleClickCancel = () => {
    onClose();
  };

  return (
    <ReactModal isOpen className="Window">
      <div>모달입니다.</div>
      <div>
        <button onClick={handleClickCancel}>X</button>
      </div>
    </ReactModal>
  );
}
