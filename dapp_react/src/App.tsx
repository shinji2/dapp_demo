import React from "react";
import "./App.css";
import { MoralisProvider } from "react-moralis";
import ConnectWalletButton from "./ConnectWalletButton";
import DisplayDeposits from "./DisplayDeposits";
import SwapTokens from "./SwapTokens";

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <div className="App">
        <header className="App-header">
          <ConnectWalletButton />
          <DisplayDeposits />
          <SwapTokens />
        </header>
      </div>
    </MoralisProvider>
  );
}

export default App;
