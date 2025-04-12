import React, { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sections from "../sections/Sections";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="section-container">
        <Sections />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
