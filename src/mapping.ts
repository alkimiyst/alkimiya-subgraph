import { HashSand, MinerStatus } from "../generated/schema";
import { NewHashSandContract } from "../generated/HashSand/HashSandFactory";
import { MinerStatsUpdated } from "../generated/Oracle/Oracle";

export function handleMinerStatusUpdated(event: MinerStatsUpdated): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let status = new MinerStatus(id);
  status.sands = event.params.sands.toHexString();
  status.due = event.params.due;
  status.lastDueFulfilled = event.params.lastDueFulfilled;
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
  sands.contractAddress = event.params.contractAddress.toHexString();
  sands.minerAddress = event.params.minerAddress.toHexString();
  sands.save();
}
