"use client";

import { useState } from "react";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();

  const [result, setResult] = useState<any>(null);

  const analyzeWallet = () => {
    if (!isConnected) {
      alert("Please connect a wallet");
      return;
    }

    setResult({
      address,
      walletType: "DeFi Degenerate 🎰",
      walletAge: "1.8 Years",
      txCount: 154,
      favoriteToken: "ETH",
      favoriteApp: "Uniswap",
      roast: "You discovered DeFi and never looked back.",
    });
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>🔥 Wallet Roast</h1>

      <Wallet />

      <button
        onClick={analyzeWallet}
        style={{
          padding: "12px 20px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Analyze Wallet
      </button>

      {result && (
        <div
          style={{
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <h2>{result.walletType}</h2>

          <p>Address: {result.address}</p>

          <p>Wallet Age: {result.walletAge}</p>

          <p>Transactions: {result.txCount}</p>

          <p>Favorite Token: {result.favoriteToken}</p>

          <p>Favorite App: {result.favoriteApp}</p>

          <hr />

          <p>{result.roast}</p>
        </div>
      )}
    </main>
  );
}