import InsightsIcon from '@mui/icons-material/Insights';
import IconImg from '../../components/TaskBar/IconImg';

const icons = [
  {
    name: 'Tech Stack',
    img: () => <IconImg Component={InsightsIcon} />,
    shortCutKey: 's',
  },
  {
    name: 'Projects',
    img: () => <IconImg Component={InsightsIcon} />,
    shortCutKey: 'p',
  },
];

export default icons;
