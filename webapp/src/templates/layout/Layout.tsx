import React from "react";
import NavBar from "../../components/organisms/NavBar";
import BottomNav from "../../components/organisms/BottomNav";
import AppBody from "../../components/organisms/AppBody";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <AppBody>{children}</AppBody>
      <BottomNav />
    </>
  );
}

export default Layout;
