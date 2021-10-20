import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

import { ItemCanceled, ItemListed, ItemSold, ItemUpdated, OfferCanceled, OfferCreated, OwnershipTransferred, UpdatePlatformFee, UpdatePlatformFeeRecipient } from "../../generated/FomoMarketplace/FomoMarketplace"
import { Global, ListedItem, SoldToken, Total1155 } from "../../generated/schema"

export function getOrCreateGlobal(name: string): Global {
    let global = Global.load(name);
    if (!global) {
      global = new Global(name);
      global.value = BigInt.fromI32(0);
      global.totalTransaction = BigInt.fromI32(0);
      global.save();
    }
    return global as Global;
}

export function createOrUpdateGlobal(name: string, value: BigInt, total: BigInt): void {
    let global = getOrCreateGlobal(name);
    global.value = value;
    global.totalTransaction = total
    global.save();
}

export function getOrCreateTotal1155(name: string): Total1155 { 
  let global = Total1155.load(name);
  if (!global) {
    global = new Total1155(name);
    global.value = BigInt.fromI32(0);
    global.save();
  }
  return global as Total1155;
}

export function createOrUpdateTotal1155(name: string, value: BigInt): void {
  let global = getOrCreateTotal1155(name);
  global.value = value;
  global.save();
}

export function getOrCreateSoldToken(name: string): SoldToken {
  let global = SoldToken.load(name);
  if (!global) {
    global = new SoldToken(name);
    global.tokenAmount = BigDecimal.fromString("0");
    global.save();
  }
  return global as SoldToken;
}
export function toBigDecimal(quantity: BigInt, decimals: i32 = 18): BigDecimal {
  return quantity.divDecimal(
    BigInt.fromI32(10)
      .pow(decimals as u8)
      .toBigDecimal()
  );
}
export function createOrUpdateSoldToken(name: string, value: BigDecimal): void {
  let global =  getOrCreateSoldToken(name);
  global.tokenAmount = value;
  global.save();
}