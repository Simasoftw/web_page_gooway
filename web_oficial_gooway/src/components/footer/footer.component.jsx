import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2024 Mindtrip Clone. Todos los derechos reservados.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px;
  background: #000;
  color: #fff;
`;

export default Footer;
