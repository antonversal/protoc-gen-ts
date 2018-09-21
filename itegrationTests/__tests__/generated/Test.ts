// GENERATED CODE -- DO NOT EDIT!
import * as protobufjs from 'protobufjs/minimal';
export namespace Foo {
  export enum Type {
    UNKNOWN = 'UNKNOWN',
    ADMIN = 'ADMIN',
    USER = 'USER'
  }

  export enum Role {
    VIEW = 'VIEW',
    EDIT = 'EDIT'
  }

  export interface Request {
    id?: number;
  }

  export class RequestMsg implements Request {
    public static decode(
      inReader: Uint8Array | protobufjs.Reader,
      length?: number
    ) {
      const reader = !(inReader instanceof protobufjs.Reader)
        ? protobufjs.Reader.create(inReader)
        : inReader;
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = new RequestMsg();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message._id = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
    private _id?: number;
    constructor(attrs?: Request) {
      Object.assign(this, attrs);
    }
    public encode(writer: protobufjs.Writer = protobufjs.Writer.create()) {
      if (this._id != null) {
        writer.uint32(8).int32(this._id);
      }
      return writer;
    }
    public get id() {
      return this._id;
    }
    public set id(val) {
      this._id = val;
    }
  }

  export interface Book {
    title?: string;
    isbn?: string;
  }

  export class BookMsg implements Book {
    public static decode(
      inReader: Uint8Array | protobufjs.Reader,
      length?: number
    ) {
      const reader = !(inReader instanceof protobufjs.Reader)
        ? protobufjs.Reader.create(inReader)
        : inReader;
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = new BookMsg();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message._title = reader.string();
            break;
          case 2:
            message._isbn = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
    private _title?: string;
    private _isbn?: string;
    constructor(attrs?: Book) {
      Object.assign(this, attrs);
    }
    public encode(writer: protobufjs.Writer = protobufjs.Writer.create()) {
      if (this._title != null) {
        writer.uint32(10).string(this._title);
      }
      if (this._isbn != null) {
        writer.uint32(18).string(this._isbn);
      }
      return writer;
    }
    public get title() {
      return this._title;
    }
    public set title(val) {
      this._title = val;
    }
    public get isbn() {
      return this._isbn;
    }
    public set isbn(val) {
      this._isbn = val;
    }
  }

  export interface User {
    id?: number;
    name?: string;
    type?: Type;
    roles?: Role[];
    favoriteBook?: Book;
    readBooks?: Book[];
  }

  export class UserMsg implements User {
    public static decode(
      inReader: Uint8Array | protobufjs.Reader,
      length?: number
    ) {
      const reader = !(inReader instanceof protobufjs.Reader)
        ? protobufjs.Reader.create(inReader)
        : inReader;
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = new UserMsg();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message._id = reader.int32();
            break;
          case 2:
            message._name = reader.string();
            break;
          case 3:
            message._type = reader.int32();
            break;
          case 4:
            if (!(message._roles && message._roles.length)) {
              message._roles = [];
            }
            message._roles.push(reader.int32());
            break;
          case 5:
            message._favoriteBook = BookMsg.decode(reader, reader.uint32());
            break;
          case 6:
            if (!(message._readBooks && message._readBooks.length)) {
              message._readBooks = [];
            }
            message._readBooks.push(BookMsg.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
    private _id?: number;
    private _name?: string;
    private _type?: number;
    private _roles?: number[];
    private _favoriteBook?: Book;
    private _readBooks?: Book[];
    constructor(attrs?: User) {
      Object.assign(this, attrs);
    }
    public encode(writer: protobufjs.Writer = protobufjs.Writer.create()) {
      if (this._id != null) {
        writer.uint32(8).int32(this._id);
      }
      if (this._name != null) {
        writer.uint32(18).string(this._name);
      }
      if (this._type != null) {
        writer.uint32(24).int32(this._type);
      }
      if (this._roles != null) {
        for (const value of this._roles) {
          writer.uint32(32).int32(value);
        }
      }
      if (this._favoriteBook != null) {
        const msg = new BookMsg(this._favoriteBook);
        msg.encode(writer.uint32(42).fork()).ldelim();
      }
      if (this._readBooks != null) {
        for (const value of this._readBooks) {
          const msg = new BookMsg(value);
          msg.encode(writer.uint32(50).fork()).ldelim();
        }
      }
      return writer;
    }
    public get id() {
      return this._id;
    }
    public set id(val) {
      this._id = val;
    }
    public get name() {
      return this._name;
    }
    public set name(val) {
      this._name = val;
    }
    public get type() {
      if (!this._type) {
        return;
      }
      switch (this._type) {
        case 0:
          return Type.UNKNOWN;
        case 1:
          return Type.ADMIN;
        case 2:
          return Type.USER;
        default:
          return;
      }
    }
    public set type(val) {
      switch (val) {
        case Type.UNKNOWN:
          this._type = 0;
          break;
        case Type.ADMIN:
          this._type = 1;
          break;
        case Type.USER:
          this._type = 2;
          break;
        default:
          this._type = undefined;
      }
    }
    public get roles() {
      if (!this._roles) {
        return;
      }
      return this._roles.map(val => {
        switch (val) {
          case 0:
            return Role.VIEW;
          case 1:
            return Role.EDIT;
          default:
            throw new Error(
              'Undefined value of enum Role for field roles of message User'
            );
        }
      });
    }
    public set roles(val) {
      if (!val) {
        return;
      }
      this._roles = val.map(value => {
        switch (value) {
          case Role.VIEW:
            return 0;
          case Role.EDIT:
            return 1;
          default:
            throw new Error(
              'Undefined value of enum Role for field roles of message User'
            );
        }
      });
    }
    public get favoriteBook() {
      return this._favoriteBook;
    }
    public set favoriteBook(val) {
      this._favoriteBook = new BookMsg(val);
    }
    public get readBooks() {
      return this._readBooks;
    }
    public set readBooks(val) {
      this._readBooks = val && val.map(v => new BookMsg(v));
    }
  }

  export const usersServiceDefinition = {
    find: {
      path: '/Users/Find',
      requestStream: false,
      responseStream: false,
      requestType: RequestMsg,
      responseType: UserMsg,
      requestSerialize: (args: Request) =>
        new RequestMsg(args).encode().finish(),
      requestDeserialize: (argBuf: Buffer) => RequestMsg.decode(argBuf),
      responseSerialize: (args: User) => new UserMsg(args).encode().finish(),
      responseDeserialize: (argBuf: Buffer) => UserMsg.decode(argBuf)
    }
  };
}