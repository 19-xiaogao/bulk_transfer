const { ethers } = require("hardhat")
const {
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("BatchTransfer", function () {

    async function testDeploy() {
        const owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" // account one 
        const baseFee = hre.ethers.parseEther('0.1');
        const txFee = hre.ethers.parseEther('0.2');
        const bonus = 2;

        const batchTransfer = await BatchTransfer.deploy(owner, baseFee, txFee, bonus);
        {
            owner,
                batchTransfer
        }
    }

    describe("sendETH", function () {
        it("Should set the send all eth", async function () {

            const { owner, batchTransfer } = await loadFixture(testDeploy);
            const address = [
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
                "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
                "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
            ]
            const amounts = [1, 1, 1, 1]
            const referrer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
            const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
            const gasPrice = await provider.getGasPrice();
            const gasLimit = 100000;
            const requiredFee = gasPrice.mul(gasLimit);
            expect(await batchTransfer.sendETH(address, amounts, referrer), {
                value: requiredFee
            })

        })
    })



})