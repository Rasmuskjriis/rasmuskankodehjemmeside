import IMG from './rasmusImg.jpg';
import './rasmusImg.css';

import { useEffect } from 'react';

function RasmusImg() {
  return <img src={IMG} alt="Rasmus" />;
}

export default RasmusImg;