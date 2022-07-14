require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    kovantest: {
      // url: "https://kovan.infura.io/v3/",
      url: "https://http-testnet.hecochain.com/",
      accounts: ["1111111111111111111111111111111111111111111111111111111111111111"]
    }
  }
};
