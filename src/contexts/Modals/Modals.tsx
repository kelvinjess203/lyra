import React, { createContext, useCallback, useState } from "react";
import {
  StyledModalWrapper,
  StyledModalBackdrop,
  StyledResponsiveWrapper,
} from "./StyledModal";

interface ModalsContext {
  content?: React.ReactNode;
  isOpen?: boolean;
  modalKey?: string;
  onPresent: (content: React.ReactNode, data?: any, key?: string) => void;
  onDismiss: () => void;
}

export const Context = createContext<ModalsContext>({
  onPresent: () => {},
  onDismiss: () => {},
});

const Modals: React.FC<any> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [content, setContent] = useState<React.ReactNode>();
  const [data, setData] = useState(null);
  const [modalKey, setModalKey] = useState<string>();

  const handlePresent = useCallback(
    (modalContent: React.ReactNode, data: any, key?: string) => {
      setModalKey(key);
      setData(data);
      setContent(modalContent);
      setIsOpen(true);
      document.body.classList.add("no-scroll");
      document.body.classList.add("modal-open");
    },
    [setContent, setIsOpen, setModalKey, setData]
  );

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Context.Provider
      value={{
        modalKey,
        content,
        isOpen,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {children}
      {isOpen && (
        <StyledModalWrapper>
          <StyledModalBackdrop
            onClick={handleDismiss}
            style={{
              background: "rgba(0, 0, 0, 0.7)",
            }}
          />
          <StyledResponsiveWrapper>
            {React.isValidElement(content) &&
              React.cloneElement(content, {
                onDismiss: handleDismiss,
                data: data,
              })}
          </StyledResponsiveWrapper>
        </StyledModalWrapper>
      )}
    </Context.Provider>
  );
};

export default Modals;
