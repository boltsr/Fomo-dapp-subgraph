import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

import { Approval, ApprovalForAll, Minted, Transfer } from "../generated/FomoNifty/FomoNifty";
import { createOrUpdateTotal1155, getOrCreateTotal1155 } from "./utils/helpers";

export function handleMinted(event: Minted): void {
    createOrUpdateTotal1155('721', getOrCreateTotal1155('721').value.plus(BigInt.fromI32(1)));
}
export function handleApproval(event: Approval): void {
    
}
export function handleApprovalForAll(event: ApprovalForAll): void {
}
export function handleTransfer(event: Transfer): void {
}

