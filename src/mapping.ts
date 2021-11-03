import { SandsRepo, OracleUpdate } from "../generated/schema";
// import { NewHashSandContract } from "../generated/HashSand/HashSandFactoryLib";
import { OracleUpdate as NewOracleUpdate } from "../generated/Oracle/Oracle";
import { NewHashRepo as NewSandsRepo } from "../generated/SandsRepo/SandsRepoFactory";

export function handleOracleUpdate(event: NewOracleUpdate): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let status = new OracleUpdate(id);
  status.referenceDay = event.params.referenceDay;
  status.referenceBlock = event.params.referenceBlock;
  status.hashrate = event.params.hashrate;
  status.reward = event.params.reward;
  status.timestamp = event.params.timestamp;
  status.save();
}

export function handleNewSandsRepo(event: NewSandsRepo): void {
  let repo = new SandsRepo(event.params.contractAddress.toHex());
  repo.contractAddress = event.params.contractAddress.toHexString();
  repo.minerAddress = event.params.minerAddress.toHexString();
  repo.erc20TokenAddress = event.params.erc20TokenAddress.toHexString();
  repo.save();
}
