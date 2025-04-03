import React from 'react';

import Section from '../HOC/Section';
import Link from '../UI/Link';
import Mainframe from './Mainframe';
import Booking from './Booking';
import FindOs from './FindOs';

function home() {
  return (
    <>
      <Mainframe />
      <FindOs /> {/* Tilføjet FindOs komponenten */}
      {/* Tilføj eventuelt flere komponenter her, f.eks. Booking */}
    </>
  );
}

export default home;