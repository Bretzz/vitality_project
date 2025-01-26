const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("RealTokenModule", (m) => {
  const token = m.contract("realToken");

  return { token };
});

module.exports = TokenModule;