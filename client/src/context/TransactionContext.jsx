import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEtheriumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvier = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ value1: "test" }}>{children}</TransactionContext.Provider>
  );
};
