require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vhPQI0bWKLqy1fDMjrQcVjXdxZr3-6Mq",
      accounts: ["bab5acecdbe53707ecbaa64e3675b952916ced259ba94fa3e09388c23d453345"],
    },
  },
};