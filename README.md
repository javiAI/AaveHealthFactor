
# Aave Health Factor extraction
This project was done for Wintermute Trading company.

Script to extract the Aave Health Factor for an address at a given block number.
This solution forks the Ethereum blockchain at the given block number and calls the getUserAccountData function from the Aave LendingPool Smart Contract

# Environment variables

CONTRACT_ADDRESS: The Aave LendingPool contract address => "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9". 

ALCHEMY_URL: "https://eth-mainnet.alchemyapi.io/v2/ < YOUR ALCHEMY KEY >" 

BLOCK_NUMBER: The block at which you want to check the health factor.
  
CONTRACT_ADDRESS: The address from which you want to check the health factor => "0x..."

  NOTE: Infura does not keep track of block snapshots and therefore does not allow for forks, use Alchemy or other provider instead.

# Usage

Clone the repository

```
git clone https://github.com/javiAI/AaveHealthFactor.git
```
Move to your project location and install dependencies

```
cd AaveHealthFactor
npm install
```

Modify the ".env_example" and set your ALCHEMY_URL, BLOCK_NUMBER and USER_ADDRESS variables. Change the name of the file to ".env" and run the node.

```
npx hardhat node
```

Get the Healt Factor.
```
node scripts/health_factor.js
```
