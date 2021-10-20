import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

import { ItemCanceled, ItemListed, ItemSold, ItemUpdated, OfferCanceled, OfferCreated, OwnershipTransferred, UpdatePlatformFee, UpdatePlatformFeeRecipient } from "../generated/FomoMarketplace/FomoMarketplace";
import { Global, ListedItem, SoldToken } from "../generated/schema";
import { createOrUpdateGlobal, getOrCreateGlobal, getOrCreateSoldToken, createOrUpdateSoldToken, toBigDecimal } from "./utils/helpers";

export function handleItemCanceled(event: ItemCanceled): void {
}


export function handleItemListed(event: ItemListed): void {

  let id: string = event.params.tokenId.toString();
  let newItem = ListedItem.load(id);
  if (newItem === null) {
    newItem = new ListedItem(id);
    newItem.allowedAddress = event.params.allowedAddress;
    newItem.count = BigInt.fromString(newItem.id);
    newItem.createdAtTimestamp = event.params.startingTime;
    newItem.tokenId = event.params.tokenId;
    newItem.quantity = BigInt.fromString(event.params.quantity.toString());
    newItem.pricePerItem = BigDecimal.fromString(event.params.pricePerItem.toString());
    newItem.isPrivate = event.params.isPrivate; 
    newItem.nft = event.params.nft;
  }
  let newGlobal = getOrCreateGlobal('total');
  createOrUpdateGlobal('total', newGlobal.value.plus(BigInt.fromI32(1)), newGlobal.totalTransaction.plus(BigInt.fromI32(1)));
  newItem.save();
}

export function handleItemSold(event: ItemSold): void {
  let payToken = event.params.payToken.toHexString().toString();
  let newSold = getOrCreateSoldToken(payToken);
  let totalValue = toBigDecimal(BigInt.fromString(event.params.price.toString())).times(BigDecimal.fromString(event.params.quantity.toString()));
  createOrUpdateSoldToken(payToken, newSold.tokenAmount.plus(totalValue));
  let newGlobal = getOrCreateGlobal('total');
  createOrUpdateGlobal('total', newGlobal.value.plus(BigInt.fromI32(1)), newGlobal.totalTransaction.plus(BigInt.fromI32(1)));
}

export function handleItemUpdated(event: ItemUpdated): void {  
  let newGlobal = getOrCreateGlobal('total');
  createOrUpdateGlobal('total', newGlobal.value.plus(BigInt.fromI32(1)), newGlobal.totalTransaction.plus(BigInt.fromI32(1)));
}

export function handleOfferCanceled(event: OfferCanceled): void {
  let newGlobal = getOrCreateGlobal('total');
  createOrUpdateGlobal('total', newGlobal.value.plus(BigInt.fromI32(1)), newGlobal.totalTransaction.plus(BigInt.fromI32(1)));
}

export function handleOfferCreated(event: OfferCreated): void {
  let newGlobal = getOrCreateGlobal('total');
  createOrUpdateGlobal('total', newGlobal.value.plus(BigInt.fromI32(1)), newGlobal.totalTransaction.plus(BigInt.fromI32(1)));
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let newGlobal = getOrCreateGlobal('total');
  createOrUpdateGlobal('total', newGlobal.value.plus(BigInt.fromI32(1)), newGlobal.totalTransaction.plus(BigInt.fromI32(1)));

}

export function handleUpdatePlatformFee(event: UpdatePlatformFee): void {

}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipient
): void {
}
