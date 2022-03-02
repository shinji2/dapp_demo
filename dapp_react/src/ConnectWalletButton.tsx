import React, { ReactElement } from "react";
import { useMoralis } from "react-moralis";

function ConnectWalletButton(): ReactElement {
  const { account, enableWeb3, chainId } = useMoralis();
  const connectWallet = () => {
    enableWeb3({ provider: "metamask", anyNetwork: true });
  };

  return (
    <>
      {account && `Address ${account}`}
      <br />
      {account && `Network: ${chainId}`}
      <br />
      {!account && <button onClick={connectWallet}>Connect Wallet</button>}
    </>
  );
}

export default ConnectWalletButton;
