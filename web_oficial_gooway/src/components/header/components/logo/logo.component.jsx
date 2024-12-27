import React from "react";

const LogoHeader = ({logo}) => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo de la pagina web oficial de gooway" />
    </div>
  );
};

export default LogoHeader;
