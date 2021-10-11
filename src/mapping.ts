import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"

import { FomoMarketplace, ItemCanceled, ItemListed, ItemSold, ItemUpdated, OfferCanceled, OfferCreated, OwnershipTransferred, UpdatePlatformFee, UpdatePlatformFeeRecipient } from "../generated/FomoMarketplace/FomoMarketplace"
import { ListedItem } from "../generated/schema"

export function handleItemCanceled(event: ItemCanceled): void {
  
}

export function handleItemListed(event: ItemListed): void {

  let id: string = ListedItem.length.toString();  
  let newItem = ListedItem.load(id);
  if (newItem === null) {
    newItem = new ListedItem(id);
    newItem.id =(ListedItem.length+1).toString();
    newItem.allowedAddress = event.params.allowedAddress;
    newItem.count = BigInt.fromI32(ListedItem.length+1);
    newItem.createdAtTimestamp = event.block.timestamp;
    newItem.tokenId = event.params.tokenId;
    newItem.quantity = event.params.quantity;
    newItem.pricePerItem = BigDecimal.fromString(event.params.pricePerItem.toString());
    newItem.isPrivate = event.params.isPrivate;
    newItem.nft = event.params.nft;
  }
}

export function handleItemSold(event: ItemSold): void {}

export function handleItemUpdated(event: ItemUpdated): void {}

export function handleOfferCanceled(event: OfferCanceled): void {}

export function handleOfferCreated(event: OfferCreated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleUpdatePlatformFee(event: UpdatePlatformFee): void {}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipient
): void {}
