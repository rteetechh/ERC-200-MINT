require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "b87fdc4af33bcad58824cf75bb5e4945f28cbaa6501db5d04e0fa25157fe829d";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
