import React from "react";
import styled, { CSSProperties } from "styled-components";
import { ReactComponent as CloseSvg } from "svg/close.svg";

export interface ModalProps<T = any> {
  onDismiss: () => void;
  data?: T;
  style?: CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ children, onDismiss, style }) => {
  const handleOnDismiss = () => {
    onDismiss();
  };

  return (
    <StyledModal style={style}>
      <StyledCloseIcon onClick={handleOnDismiss}>
        <CloseSvg />
      </StyledCloseIcon>
      {children}
    </StyledModal>
  );
};

const StyledCloseIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 100000;
  padding: 8px;
  transition: 0.2s;

  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const StyledModal = styled.div`
  box-sizing: border-box;
  background: ${({ theme }) => theme.card.background};
  backdrop-filter: blur(10px);
  border: ${({ theme }) => theme.card.border};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 0;
`;

export default Modal;
