import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

import { ApprovalForAll, Creators, Supply, TransferBatch, TransferSingle, URI} from "../generated/FomoNFT1155/FomoNFT1155";
import { Global, ListedItem, SoldToken } from "../generated/schema";
import { createOrUpdateTotal1155, getOrCreateTotal1155 } from "./utils/helpers";

export function handleSupply(event: Supply): void {
}


export function handleCreators(event: Creators): void {
}

export function handleApprovalForAll(event: ApprovalForAll): void {
}

export function handleTransferBatch(event: TransferBatch): void {  
}

export function handleTransferSingle(event: TransferSingle): void {
    let amount: BigInt = BigInt.fromString(event.params.value.toString());
    if (event.params.from.toString().includes("0x0000000000000000")) {
        createOrUpdateTotal1155('1155', getOrCreateTotal1155('1155').value.plus(amount));
    }
}

export function handleURI(event: URI): void {}