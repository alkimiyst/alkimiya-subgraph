import { HashSands } from "../generated/schema";
import { NewHashSandContract } from "../generated/HashSand/HashSandFactory";

export function handleMinerStatusUpdated(event: NewHashSandContract): void {  
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let sands = new HashSands(id);
  
  sands.save();
}
