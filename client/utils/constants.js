import abi from "./transactions.json";

export const contractABI = abi.abi;
export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
