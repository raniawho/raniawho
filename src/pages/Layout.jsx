import React from "react";

import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </React.Fragment>
  );
};

export default Layout;
