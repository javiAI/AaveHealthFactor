// Written by Javier Abril  - https://github.com/javiAI
// Wintermute hiring process sample task

const { ethers } = require('hardhat');
const provider = ethers.provider;

const LendingPoolV2Artifact = require('@aave/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json');

const userAddress = process.env.USER_ADDRESS;
const contractAddress = process.env.CONTRACT_ADDRESS;

// AAVE Contract
const contractAbi = LendingPoolV2Artifact.abi;
const contract = new ethers.Contract(contractAddress, contractAbi, provider);

// Current Block
const blockNumber = provider.getBlockNumber().then((blockNumber) => {
    console.log('Wallet address:  ' + userAddress);
    console.log('Block number:    ' + blockNumber);

    // User Information
    contract.getUserAccountData(userAddress).then((userAccountData) => {
        const healthFactorHex = userAccountData.healthFactor._hex;
        // 1.157920892373162e77 -> '0xff..ff' (max. value)
        if (parseInt(healthFactorHex, 16) >= 1.157920892373162e77) {
            console.log(
                'The provided address has no borrows from AAVE at current block ' +
                    blockNumber
            );
        } else {
            console.log(
                'Health factor:   ' +
                    ethers.utils.formatEther(BigInt(healthFactorHex))
            );
        }
    });
});
