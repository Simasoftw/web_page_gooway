// Header.jsx
import React from "react";
import "./header.component.css"; // Estilos específicos para el header
import LogoHeader from "./components/logo/logo.component";
import NavigationHeader from "./components/navigation/navigation";
import UserActionsHeader from "./components/actions/action";
import pagesLogo from '../../assets/images/logo-app.png'

const Header = () => {
  return (
    <header className="header">
      <LogoHeader logo={pagesLogo} />
      <NavigationHeader />

    </header>
  );
};

export default Header;
