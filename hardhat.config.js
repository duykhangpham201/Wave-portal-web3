require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: PROD_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};