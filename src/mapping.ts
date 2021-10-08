import { BigInt } from "@graphprotocol/graph-ts"

import { FomoMarketplace, ItemCanceled, ItemListed, ItemSold, ItemUpdated, OfferCanceled, OfferCreated, OwnershipTransferred, UpdatePlatformFee, UpdatePlatformFeeRecipient } from "../generated/FomoMarketplace/FomoMarketplace"
import { ListedItem } from "../generated/schema"

export function handleItemCanceled(event: ItemCanceled): void {
}

export function handleItemListed(event: ItemListed): void {
  
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
