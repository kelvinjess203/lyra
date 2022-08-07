import React from "react";
import styled from "styled-components";

const LogoWithText: React.FC = () => {
  return <StyledLogo>LOGO</StyledLogo>;
};

const StyledLogo = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 19px;
  text-transform: uppercase;
  display: inline-block;
  background: linear-gradient(
    73.6deg,
    #85e2ff 2.11%,
    #5c63ff 42.39%,
    #df85ff 85.72%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export default LogoWithText;
