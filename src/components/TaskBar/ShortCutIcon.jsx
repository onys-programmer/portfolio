import './ShortCutIcon.scss';

export default function ShortCutIcon({ icon }) {
  const { name, img } = icon;
  return (
    <div className='Icon'>
      {name}
      {img()}
    </div>
  );
}
