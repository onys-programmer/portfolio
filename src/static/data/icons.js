import InsightsIcon from '@mui/icons-material/Insights';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BoltIcon from '@mui/icons-material/Bolt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BackpackIcon from '@mui/icons-material/Backpack';

import IconImg from '../../components/TaskBar/IconImg';

const icons = [
  {
    name: 'Tech Stack',
    img: () => <IconImg Component={InsightsIcon} />,
    shortCutKey: 's',
  },
  {
    name: 'Projects',
    img: () => <IconImg Component={CardGiftcardIcon} />,
    shortCutKey: 'p',
  },
  {
    name: 'Skill',
    img: () => <IconImg Component={BoltIcon} />,
    shortCutKey: 'k',
  },
  {
    name: 'Career',
    img: () => <IconImg Component={AssignmentIndIcon} />,
    shortCutKey: 'c',
  },
  {
    name: 'Inventory',
    img: () => <IconImg Component={BackpackIcon} />,
    shortCutKey: 'i',
  },
];

export default icons;
