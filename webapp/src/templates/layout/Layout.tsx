import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/organisms/NavBar";
import AppBody from "../../components/organisms/AppBody";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [focus, setFocus] = useState(0);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname == "/") {
      setFocus(0);
    } else if (location.pathname == "/about") {
      setFocus(1);
    } else if (location.pathname == "/contact") {
      setFocus(2);
    } else if (location.pathname == "/services") {
      setFocus(3);
    } else if (location.pathname == "/careers") {
      setFocus(4);
    }
  }, [location]);

  return (
    <>
      <NavBar focus={focus} />
      <AppBody>{children}</AppBody>
    </>
  );
}

export default Layout;
