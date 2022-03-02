import React, { ReactElement, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Contract, ethers, utils } from "ethers";
import ASSET_ABI from "./abis/Asset.json";

function DisplayDeposits(): ReactElement {
  const { web3 } = useMoralis();
  const USDC_LP_ADDRESS = "0x909B0ce4FaC1A0dCa78F8Ca7430bBAfeEcA12871";
  const USDC_DECIMALS = "6";
  const [depositAmount, setDepositAmount] = useState("");
  useEffect(() => {
    const getDeposits = async () => {
      if (!web3) {
        return;
      }
      const usdcAsset = new Contract(
        USDC_LP_ADDRESS,
        ASSET_ABI,
        web3 as ethers.providers.JsonRpcProvider
      );

      if (usdcAsset) {
        const liability = await usdcAsset.liability();
        setDepositAmount(utils.formatUnits(liability, USDC_DECIMALS));
      }
    };
    getDeposits();
  }, [web3]);

  return <>USDC Deposits on Platypus: {depositAmount}</>;
}

export default DisplayDeposits;
