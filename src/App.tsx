import React from "react";
import ResetCSS from "ResetCSS";
import AppRouter from "./AppRouter";
import Providers from "./Providers";

const App: React.FC = () => {
  return (
    <Providers>
      <ResetCSS />
      <AppRouter />
    </Providers>
  );
};

export default App;
