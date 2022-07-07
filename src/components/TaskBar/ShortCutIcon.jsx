import './ShortCutIcon.scss';

export default function ShortCutIcon({ icon }) {
  const { name, img } = icon;
  return (
    <div className='ShortCutIcon'>
      <div className="btn">
        {img()}
      </div>
      <p className='title'>{name}</p>
    </div>
  );
}
