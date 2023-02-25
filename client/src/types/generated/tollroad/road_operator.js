"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "b9lab.tollroad.tollroad";
function createBaseRoadOperator() {
    return { index: "", name: "", token: "", active: false, creator: "" };
}
exports.RoadOperator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.active === true) {
            writer.uint32(32).bool(message.active);
        }
        if (message.creator !== "") {
            writer.uint32(42).string(message.creator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRoadOperator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.active = reader.bool();
                    break;
                case 5:
                    message.creator = reader.string();
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
            index: isSet(object.index) ? String(object.index) : "",
            name: isSet(object.name) ? String(object.name) : "",
            token: isSet(object.token) ? String(object.token) : "",
            active: isSet(object.active) ? Boolean(object.active) : false,
            creator: isSet(object.creator) ? String(object.creator) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.name !== undefined && (obj.name = message.name);
        message.token !== undefined && (obj.token = message.token);
        message.active !== undefined && (obj.active = message.active);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    create: function (base) {
        return exports.RoadOperator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseRoadOperator();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.active = (_d = object.active) !== null && _d !== void 0 ? _d : false;
        message.creator = (_e = object.creator) !== null && _e !== void 0 ? _e : "";
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
