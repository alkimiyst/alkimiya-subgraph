# Alkimiya Subgraph

Oracle

HashSandsFactory

## Dependencies

Install ganache-cli or download ganache 

    npm install -g truffle ganache-cli

    https://www.trufflesuite.com/ganache

Install graph cli 

    npm install -g @graphprotocol/graph-cli

The solution depends on docker to test on development env

## How to generate code 

    graph codegen

## How to test

    1 - Start hardhat node 
        npx hardhat node ----hostname 0.0.0.0
    2 - Run the subgraph script to deploy sample contracts
        npx hardhat run scripts/subgraph.js --network hardhat 
    3 - Update subgraph.yaml with the generated addresses from step 1
    4 - Run graph node locally 
        docker-compose up 
    5 - Update hardhat.config.js network mapping local with the mnemonic
    6 - Run the following commands on subgraph directory
        yarn create-local
        yarn deploy-local







