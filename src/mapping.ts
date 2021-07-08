import { MinerStatus } from "../generated/schema";
import { MinerStatsUpdated } from "../generated/Oracle/Oracle";

export function handleMinerStatusUpdated(event: MinerStatsUpdated): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let status = new MinerStatus(id);
  status.sands = event.params.sands.toHexString();
  status.reward = event.params.reward;
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