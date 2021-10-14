import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"

import { ItemCanceled, ItemListed, ItemSold, ItemUpdated, OfferCanceled, OfferCreated, OwnershipTransferred, UpdatePlatformFee, UpdatePlatformFeeRecipient } from "../../generated/FomoMarketplace/FomoMarketplace"
import { Global, ListedItem, SoldToken } from "../../generated/schema"

export function getOrCreateGlobal(name: string): Global {
    let global = Global.load(name);
    if (!global) {
      global = new Global(name);
      global.value = BigInt.fromI32(0);
      global.save();
    }
    return global as Global;
}
  
export function createOrUpdateGlobal(name: string, value: BigInt): void {
    let global =  getOrCreateGlobal(name);
    global.value = value;
    global.save();
}

// export function getOrCreateSoldToken(name: string): SoldToken {
//   let global = SoldToken.load(name);
//   if (!global) {
//     global = new SoldToken(name);
//     global.tokenAmount = BigDecimal.fromString("0");
//     global.save();
//   }
//   return global as SoldToken;
// }

// export function createOrUpdateSoldToken(name: string, value: BigDecimal): void {
//   let global =  getOrCreateSoldToken(name);
//   global.tokenAmount = value;
//   global.save();
// }