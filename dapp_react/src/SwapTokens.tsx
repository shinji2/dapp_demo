import React, { ReactElement, useCallback, useState } from "react";
import { useMoralis } from "react-moralis";
import { Contract, ethers, utils, constants } from "ethers";
import POOL_ABI from "./abis/Pool.json";

function SwapTokens(): ReactElement {
  const { account, web3 } = useMoralis();
  const POOL_ADDRESS = "0x66357dCaCe80431aee0A7507e2E361B7e2402370";
  const USDC_ADDRESS = "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";
  const USDT_ADDRESS = "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7";
  const USDC_DECIMALS = "6";
  const USDT_DECIMALS = "6";

  const [fromAmount, setFromAmount] = useState("");
  const [quoteAmount, setQuoteAmount] = useState("");

  const getQuote = useCallback(async () => {
    if (!web3) {
      return;
    }
    const pool = new Contract(
      POOL_ADDRESS,
      POOL_ABI,
      web3 as ethers.providers.JsonRpcProvider
    );

    if (pool) {
      const toAmount = (
        await pool.quotePotentialSwap(
          USDC_ADDRESS,
          USDT_ADDRESS,
          utils.parseUnits(fromAmount, USDC_DECIMALS)
        )
      ).potentialOutcome;
      setQuoteAmount(utils.formatUnits(toAmount, USDT_DECIMALS));
    }
  }, [web3, fromAmount]);

  const swap = useCallback(async () => {
    if (!web3) {
      return;
    }
    const signer = web3.getSigner();
    const pool = new Contract(POOL_ADDRESS, POOL_ABI, signer);

    if (pool) {
      await pool.swap(
        USDC_ADDRESS,
        USDT_ADDRESS,
        utils.parseUnits(fromAmount, USDC_DECIMALS),
        constants.Zero,
        account,
        (new Date().getTime() / 1000 + Number(60)).toFixed(0)
      );
    }
  }, [web3, fromAmount, account]);

  return (
    <div>
      USDC &gt; USDT:{" "}
      <input
        value={fromAmount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFromAmount(e.target.value);
        }}
      />
      <button onClick={getQuote}>Get Quote in USDT</button>
      <button onClick={swap}>Swap</button>
      <br />
      You will get: {quoteAmount} USDT
    </div>
  );
}

export default SwapTokens;
