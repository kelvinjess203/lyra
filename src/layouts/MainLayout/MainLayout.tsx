import React from "react";
import styled from "styled-components";
import PageLoader from "components/PageLoader";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SubHeader from "./components/SubHeader";

const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <StyledWraper>
      <Header />

      <Navigation />
      <StyledContent>
        <SubHeader />
        <SuspenseWithChunkError fallback={<PageLoader />}>
          {children}
        </SuspenseWithChunkError>
      </StyledContent>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.backgroundColor};
  background-image: ${(props) => props.theme.backgroundImage};
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  margin-left: 270px;
`;

export default MainLayout;
