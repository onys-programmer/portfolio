import './ShortCutKey.scss';

export default function ShortCutKey({ icon: { shortCutKey } }) {
  return (
    <div className="ShortCutKey">
      <p className='key-name'>
        {shortCutKey}
      </p>
    </div>
  );
}
