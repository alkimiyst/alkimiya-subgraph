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

Step 1 

    alkimiya-v0-core/
    npx hardhat node --hostname 0.0.0.0 --as-network mainnet

Step 2 

    alkimiya-subgraph/
    docker-compose up 

Step 3

    alkimiya-v0-core/
    npx hardhat run --network localhost scripts/subgraph.js

Step 4

    Copy Oracle and Factory address from Step 3 output and replace then on subgraph.yaml
    Line 12 for Factory
    Line 32 for Oracle

Step 5 

    alkimiya-subgraph/
    yarn create-local
    yarn deploy-local







