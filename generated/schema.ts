// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ListedItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("pricePerItem", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("isPrivate", Value.fromBoolean(false));
    this.set("allowedAddress", Value.fromBytes(Bytes.empty()));
    this.set("nft", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ListedItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ListedItem entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ListedItem", id.toString(), this);
    }
  }

  static load(id: string): ListedItem | null {
    return changetype<ListedItem | null>(store.get("ListedItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get pricePerItem(): BigDecimal {
    let value = this.get("pricePerItem");
    return value!.toBigDecimal();
  }

  set pricePerItem(value: BigDecimal) {
    this.set("pricePerItem", Value.fromBigDecimal(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get isPrivate(): boolean {
    let value = this.get("isPrivate");
    return value!.toBoolean();
  }

  set isPrivate(value: boolean) {
    this.set("isPrivate", Value.fromBoolean(value));
  }

  get allowedAddress(): Bytes {
    let value = this.get("allowedAddress");
    return value!.toBytes();
  }

  set allowedAddress(value: Bytes) {
    this.set("allowedAddress", Value.fromBytes(value));
  }

  get nft(): Bytes {
    let value = this.get("nft");
    return value!.toBytes();
  }

  set nft(value: Bytes) {
    this.set("nft", Value.fromBytes(value));
  }
}

export class SoldToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("tokenAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SoldToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save SoldToken entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("SoldToken", id.toString(), this);
    }
  }

  static load(id: string): SoldToken | null {
    return changetype<SoldToken | null>(store.get("SoldToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get tokenAmount(): BigDecimal {
    let value = this.get("tokenAmount");
    return value!.toBigDecimal();
  }

  set tokenAmount(value: BigDecimal) {
    this.set("tokenAmount", Value.fromBigDecimal(value));
  }
}

export class DailySoldToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("dayStamp", Value.fromBigInt(BigInt.zero()));
    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("tokenAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DailySoldToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DailySoldToken entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DailySoldToken", id.toString(), this);
    }
  }

  static load(id: string): DailySoldToken | null {
    return changetype<DailySoldToken | null>(store.get("DailySoldToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dayStamp(): BigInt {
    let value = this.get("dayStamp");
    return value!.toBigInt();
  }

  set dayStamp(value: BigInt) {
    this.set("dayStamp", Value.fromBigInt(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get tokenAmount(): BigDecimal {
    let value = this.get("tokenAmount");
    return value!.toBigDecimal();
  }

  set tokenAmount(value: BigDecimal) {
    this.set("tokenAmount", Value.fromBigDecimal(value));
  }
}

export class Global extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
    this.set("totalTransaction", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Global entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Global entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Global", id.toString(), this);
    }
  }

  static load(id: string): Global | null {
    return changetype<Global | null>(store.get("Global", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get totalTransaction(): BigInt {
    let value = this.get("totalTransaction");
    return value!.toBigInt();
  }

  set totalTransaction(value: BigInt) {
    this.set("totalTransaction", Value.fromBigInt(value));
  }
}

export class Total1155 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Total1155 entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Total1155 entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Total1155", id.toString(), this);
    }
  }

  static load(id: string): Total1155 | null {
    return changetype<Total1155 | null>(store.get("Total1155", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}
