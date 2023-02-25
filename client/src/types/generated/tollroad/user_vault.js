"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "b9lab.tollroad.tollroad";
function createBaseUserVault() {
    return { owner: "", roadOperatorIndex: "", token: "", balance: long_1["default"].UZERO };
}
exports.UserVault = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.roadOperatorIndex !== "") {
            writer.uint32(18).string(message.roadOperatorIndex);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (!message.balance.isZero()) {
            writer.uint32(32).uint64(message.balance);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUserVault();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.roadOperatorIndex = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.balance = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
            roadOperatorIndex: isSet(object.roadOperatorIndex) ? String(object.roadOperatorIndex) : "",
            token: isSet(object.token) ? String(object.token) : "",
            balance: isSet(object.balance) ? long_1["default"].fromValue(object.balance) : long_1["default"].UZERO
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.roadOperatorIndex !== undefined && (obj.roadOperatorIndex = message.roadOperatorIndex);
        message.token !== undefined && (obj.token = message.token);
        message.balance !== undefined && (obj.balance = (message.balance || long_1["default"].UZERO).toString());
        return obj;
    },
    create: function (base) {
        return exports.UserVault.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUserVault();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.roadOperatorIndex = (_b = object.roadOperatorIndex) !== null && _b !== void 0 ? _b : "";
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? long_1["default"].fromValue(object.balance)
            : long_1["default"].UZERO;
        return message;
    }
};
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
