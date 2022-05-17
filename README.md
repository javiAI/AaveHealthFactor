
# Aave Health Factor extraction
This project was done for Wintermute Trading company.

Script to extract the Aave Health Factor for an address at a given block number.
This solution forks the Ethereum blockchain at the given block number and calls the getUserAccountData function from the Aave LendingPool Smart Contract

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

Modify ".env_example" and set your ALCHEMY_URL, BLOCK_NUMBER and USER_ADDRESS variables. Change its name to ".env".
NOTE: Infura does not keep track of blocks and therefore does not allow for forks, use Alchemy or other provider instead.

Run the node at the given block

```
npx hardhat node
```

Open a new terminal and run 
```
node scripts/health_factor.js
```
