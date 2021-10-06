import { HashRepo, HashSand, MinerStatus } from "../generated/schema";
import { NewHashSandContract } from "../generated/HashSand/HashSandFactory";
import { MinerStatsUpdated } from "../generated/Oracle/Oracle";
import { NewHashRepo } from "../generated/HashRepo/HashRepoFactory";

export function handleMinerStatusUpdated(event: MinerStatsUpdated): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let status = new MinerStatus(id);
  status.sands = event.params.sands.toHexString();
  status.due = event.params.due;
  status.balance = event.params.balance;
  status.updated = event.params.updated;
  status.minerHashrate = event.params.minerHashrate;
  status.minerReward = event.params.minerReward;
  status.poolHashrate = event.params.poolHashrate;
  status.poolReward = event.params.poolReward;
  status.day = event.params.day;
  status.defaulted = event.params.defaulted;
  status.save();
}

export function handleNewHashSand(event: NewHashSandContract): void {
  let sands = new HashSand(event.params.contractAddress.toHex());
  sands.minerAddress = event.params.minerAddress.toHexString();
  sands.contractAddress = event.params.contractAddress.toHexString();
  sands.paymentTokenAddress = event.params.paymentTokenAddress.toHexString();
  sands.collateralTokenAddress =
    event.params.collateralTokenAddress.toHexString();
  sands.hashrate = event.params.hashrate;
  sands.period = event.params.period;
  sands.reservedPrice = event.params.reservedPrice;
  sands.minimumThreshold = event.params.minimumThreshold;
  sands.hashRepoAddress = event.params.hashRepoAddress.toHexString();
  sands.save();
}

export function handleNewHashRepo(event: NewHashRepo): void {
  let repo = new HashRepo(event.params.contractAddress.toHex());
  repo.contractAddress = event.params.contractAddress.toHexString();
  repo.minerAddress = event.params.minerAddress.toHexString();
  repo.minerId = event.params.minerId;
  repo.miningPool = event.params.miningPool;
  repo.erc20TokenAddress = event.params.erc20TokenAddress.toHexString();
  repo.save();
}
