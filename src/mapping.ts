import {
  SandsRepo,
  ETHOracleUpdate,
  WBTCOracleUpdate,
} from "../generated/schema";
// import { NewHashSandContract } from "../generated/HashSand/HashSandFactoryLib";
import { OracleUpdate as NewETHOracleUpdate } from "../generated/ETHOracle/Oracle";
import { OracleUpdate as NewWBTCOracleUpdate } from "../generated/WBTCOracle/Oracle";
import { NewSandsRepo } from "../generated/SandsRepo/SandsRepoFactory";

export function handleETHOracleUpdate(event: NewETHOracleUpdate): void {
  // let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let status = new ETHOracleUpdate(event.params.referenceDay.toString());
  status.referenceDay = event.params.referenceDay;
  status.referenceBlock = event.params.referenceBlock;
  status.hashrate = event.params.hashrate;
  status.reward = event.params.reward;
  status.fees = event.params.fees;
  status.difficulty = event.params.difficulty;
  status.timestamp = event.params.timestamp;
  status.save();
}

export function handleWBTCOracleUpdate(event: NewWBTCOracleUpdate): void {
  // let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let status = new WBTCOracleUpdate(event.params.referenceDay.toString());
  status.referenceDay = event.params.referenceDay;
  status.referenceBlock = event.params.referenceBlock;
  status.hashrate = event.params.hashrate;
  status.reward = event.params.reward;
  status.fees = event.params.fees;
  status.difficulty = event.params.difficulty;
  status.timestamp = event.params.timestamp;
  status.save();
}

export function handleNewSandsRepo(event: NewSandsRepo): void {
  let repo = new SandsRepo(event.params.contractAddress.toHex());
  repo.contractAddress = event.params.contractAddress.toHexString();
  repo.minerAddress = event.params.minerAddress.toHexString();
  repo.erc20TokenAddress = event.params.erc20TokenAddress.toHexString();
  repo.createdAt = event.block.timestamp;
  repo.save();
}
