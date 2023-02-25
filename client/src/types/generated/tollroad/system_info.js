"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "b9lab.tollroad.tollroad";
function createBaseSystemInfo() {
    return { nextOperatorId: long_1["default"].UZERO };
}
exports.SystemInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (!message.nextOperatorId.isZero()) {
            writer.uint32(8).uint64(message.nextOperatorId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSystemInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextOperatorId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { nextOperatorId: isSet(object.nextOperatorId) ? long_1["default"].fromValue(object.nextOperatorId) : long_1["default"].UZERO };
    },
    toJSON: function (message) {
        var obj = {};
        message.nextOperatorId !== undefined && (obj.nextOperatorId = (message.nextOperatorId || long_1["default"].UZERO).toString());
        return obj;
    },
    create: function (base) {
        return exports.SystemInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseSystemInfo();
        message.nextOperatorId = (object.nextOperatorId !== undefined && object.nextOperatorId !== null)
            ? long_1["default"].fromValue(object.nextOperatorId)
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
