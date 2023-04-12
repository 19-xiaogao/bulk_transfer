// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const deployAmount = hre.ethers.utils.parseEther("0.001");
  const BulkTransfer = await hre.ethers.getContractFactory("BatchTransfer");
  const contractBulk = await BulkTransfer.deploy("0xFBA9E29E18a5eBf31597eEF4496acdB6F8F25EAf", 1000, 1000, 2)

  await contractBulk.deployed();
  console.log(contractBulk);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
