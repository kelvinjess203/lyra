/// <reference types="react-scripts" />
interface Window {
  isFocused: boolean;
  AlgoSigner: {
    connect: () => Promise<void>;
    accounts: () => Promise<string[]>;
  };
  MathJax?: {
    Hub: {
      Startup: {
        Typeset: () => void;
      };
    };
  };
}
