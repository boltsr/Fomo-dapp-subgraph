import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

import { ItemCanceled, ItemListed, ItemSold, ItemUpdated, OfferCanceled, OfferCreated, OwnershipTransferred, UpdatePlatformFee, UpdatePlatformFeeRecipient } from "../generated/FomoMarketplace/FomoMarketplace";
import { Global, ListedItem } from "../generated/schema";
import {createOrUpdateGlobal, getOrCreateGlobal} from "./utils/helpers";
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
  createOrUpdateGlobal('total', getOrCreateGlobal('total').value.plus(BigInt.fromI32(1)));
  newItem.save();
}

export function handleItemSold(event: ItemSold): void {
  // createOrUpdateSoldToken(event.params.payToken.toString(), getOrCreateSoldToken(event.params.payToken.toString()).tokenAmount.plus(BigDecimal.fromString(event.params.payToken.toString())));
}

export function handleItemUpdated(event: ItemUpdated): void {
  
}

export function handleOfferCanceled(event: OfferCanceled): void {}

export function handleOfferCreated(event: OfferCreated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleUpdatePlatformFee(event: UpdatePlatformFee): void {}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipient
): void {}
