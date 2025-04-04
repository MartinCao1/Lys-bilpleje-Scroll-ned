import React, { Fragment } from 'react';

import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Sections from '../sections/Sections';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Sections />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
