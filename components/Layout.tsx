import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

type layoutProps = {
  children: ReactNode,
}

const Layout:FC<layoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;