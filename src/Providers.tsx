import React from "react";
import { RefreshContextProvider } from "./contexts/RefreshContext";
import store from "./state";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { TOAST_CONFIG } from "./config/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WalletContext from "contexts/WalletContext";

const Providers: React.FC<any> = ({ children }) => {
  return (
    <WindowProvider>
      <WalletContext>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <RefreshContextProvider>{children}</RefreshContextProvider>

            <ToastContainer {...TOAST_CONFIG} />
          </Provider>
        </ThemeProvider>
      </WalletContext>
    </WindowProvider>
  );
};

const WindowProvider: React.FC<any> = ({ children }) => {
  let canUseDOM = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

  if (canUseDOM) {
    window.onfocus = () => {
      window.isFocused = true;
    };

    window.onblur = () => {
      window.isFocused = false;
    };
  }

  return <>{children}</>;
};

export default Providers;
