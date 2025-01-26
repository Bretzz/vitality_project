import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
    },
    localhost : {
      url : 'http://127.0.0.1:8545',
      accounts : ["7820d91e961f9d7ef006038480bbcfab95aa484972c476ca0689e793953c40bc"]
    },
    arbitrum_sepolia: {
      url: 'https://arbitrum-sepolia-rpc.publicnode.com',
      chainId: 0x66eee,
      accounts : ["7820d91e961f9d7ef006038480bbcfab95aa484972c476ca0689e793953c40bc"]
    },
  },
  solidity: {
    version: '0.8.28',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000
  }
};

export default config;
