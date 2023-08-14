/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "product";

export interface CreateProductRequest {
  name: string;
  sku: string;
  stock: number;
  price: number;
}

export interface CreateProductResponse {
  status: number;
  error: string[];
  id: number;
}

export interface FindOneData {
  id: number;
  name: string;
  sku: string;
  stock: number;
  price: number;
}

export interface FindOneRequest {
  id: number;
}

export interface FindOneResponse {
  status: number;
  error: string[];
  data: FindOneData | undefined;
}

export interface DecreaseStockRequest {
  id: number;
}

export interface DecreaseStockResponse {
  status: number;
  error: string[];
}

function createBaseCreateProductRequest(): CreateProductRequest {
  return { name: "", sku: "", stock: 0, price: 0 };
}

export const CreateProductRequest = {
  encode(message: CreateProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sku !== "") {
      writer.uint32(18).string(message.sku);
    }
    if (message.stock !== 0) {
      writer.uint32(24).int32(message.stock);
    }
    if (message.price !== 0) {
      writer.uint32(33).double(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sku = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.stock = reader.int32();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.price = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      sku: isSet(object.sku) ? String(object.sku) : "",
      stock: isSet(object.stock) ? Number(object.stock) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: CreateProductRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.sku !== "") {
      obj.sku = message.sku;
    }
    if (message.stock !== 0) {
      obj.stock = Math.round(message.stock);
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductRequest>, I>>(base?: I): CreateProductRequest {
    return CreateProductRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductRequest>, I>>(object: I): CreateProductRequest {
    const message = createBaseCreateProductRequest();
    message.name = object.name ?? "";
    message.sku = object.sku ?? "";
    message.stock = object.stock ?? 0;
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseCreateProductResponse(): CreateProductResponse {
  return { status: 0, error: [], id: 0 };
}

export const CreateProductResponse = {
  encode(message: CreateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    if (message.id !== 0) {
      writer.uint32(24).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: CreateProductResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.error?.length) {
      obj.error = message.error;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductResponse>, I>>(base?: I): CreateProductResponse {
    return CreateProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductResponse>, I>>(object: I): CreateProductResponse {
    const message = createBaseCreateProductResponse();
    message.status = object.status ?? 0;
    message.error = object.error?.map((e) => e) || [];
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseFindOneData(): FindOneData {
  return { id: 0, name: "", sku: "", stock: 0, price: 0 };
}

export const FindOneData = {
  encode(message: FindOneData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.sku !== "") {
      writer.uint32(26).string(message.sku);
    }
    if (message.stock !== 0) {
      writer.uint32(32).int32(message.stock);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindOneData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sku = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.stock = reader.int32();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.price = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindOneData {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      sku: isSet(object.sku) ? String(object.sku) : "",
      stock: isSet(object.stock) ? Number(object.stock) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: FindOneData): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.sku !== "") {
      obj.sku = message.sku;
    }
    if (message.stock !== 0) {
      obj.stock = Math.round(message.stock);
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneData>, I>>(base?: I): FindOneData {
    return FindOneData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneData>, I>>(object: I): FindOneData {
    const message = createBaseFindOneData();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.sku = object.sku ?? "";
    message.stock = object.stock ?? 0;
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseFindOneRequest(): FindOneRequest {
  return { id: 0 };
}

export const FindOneRequest = {
  encode(message: FindOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindOneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindOneRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: FindOneRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneRequest>, I>>(base?: I): FindOneRequest {
    return FindOneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneRequest>, I>>(object: I): FindOneRequest {
    const message = createBaseFindOneRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseFindOneResponse(): FindOneResponse {
  return { status: 0, error: [], data: undefined };
}

export const FindOneResponse = {
  encode(message: FindOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    if (message.data !== undefined) {
      FindOneData.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindOneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = FindOneData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindOneResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
      data: isSet(object.data) ? FindOneData.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: FindOneResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.error?.length) {
      obj.error = message.error;
    }
    if (message.data !== undefined) {
      obj.data = FindOneData.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneResponse>, I>>(base?: I): FindOneResponse {
    return FindOneResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneResponse>, I>>(object: I): FindOneResponse {
    const message = createBaseFindOneResponse();
    message.status = object.status ?? 0;
    message.error = object.error?.map((e) => e) || [];
    message.data = (object.data !== undefined && object.data !== null)
      ? FindOneData.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseDecreaseStockRequest(): DecreaseStockRequest {
  return { id: 0 };
}

export const DecreaseStockRequest = {
  encode(message: DecreaseStockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecreaseStockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecreaseStockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DecreaseStockRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: DecreaseStockRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DecreaseStockRequest>, I>>(base?: I): DecreaseStockRequest {
    return DecreaseStockRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DecreaseStockRequest>, I>>(object: I): DecreaseStockRequest {
    const message = createBaseDecreaseStockRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDecreaseStockResponse(): DecreaseStockResponse {
  return { status: 0, error: [] };
}

export const DecreaseStockResponse = {
  encode(message: DecreaseStockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecreaseStockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecreaseStockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DecreaseStockResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DecreaseStockResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.error?.length) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DecreaseStockResponse>, I>>(base?: I): DecreaseStockResponse {
    return DecreaseStockResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DecreaseStockResponse>, I>>(object: I): DecreaseStockResponse {
    const message = createBaseDecreaseStockResponse();
    message.status = object.status ?? 0;
    message.error = object.error?.map((e) => e) || [];
    return message;
  },
};

export interface ProductService {
  CreateProduct(request: CreateProductRequest): Promise<CreateProductResponse>;
  FindOne(request: FindOneRequest): Promise<FindOneResponse>;
  DecreaseStock(request: DecreaseStockRequest): Promise<DecreaseStockResponse>;
}

export const ProductServiceServiceName = "product.ProductService";
export class ProductServiceClientImpl implements ProductService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProductServiceServiceName;
    this.rpc = rpc;
    this.CreateProduct = this.CreateProduct.bind(this);
    this.FindOne = this.FindOne.bind(this);
    this.DecreaseStock = this.DecreaseStock.bind(this);
  }
  CreateProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    const data = CreateProductRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateProduct", data);
    return promise.then((data) => CreateProductResponse.decode(_m0.Reader.create(data)));
  }

  FindOne(request: FindOneRequest): Promise<FindOneResponse> {
    const data = FindOneRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOne", data);
    return promise.then((data) => FindOneResponse.decode(_m0.Reader.create(data)));
  }

  DecreaseStock(request: DecreaseStockRequest): Promise<DecreaseStockResponse> {
    const data = DecreaseStockRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DecreaseStock", data);
    return promise.then((data) => DecreaseStockResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
