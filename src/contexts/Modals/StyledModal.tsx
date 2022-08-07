import styled from "styled-components";

export const StyledModalTitle = styled.div`
  color: ${(props) => props.theme.text.headingColor};
  font-size: 20px;
  font-weight: bold;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StyledModalContent = styled.div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
`;

export const StyledResponsiveWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 512px;
  max-height: 95vh;
`;

export const StyledModalWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const StyledModalBackdrop = styled.div`
  transition: 0.3s;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
