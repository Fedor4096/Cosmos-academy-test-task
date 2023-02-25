import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
    MsgCreateRoadOperator,
    MsgCreateRoadOperatorResponse,
    MsgCreateUserVault,
    MsgCreateUserVaultResponse,
    MsgUpdateRoadOperator,
    MsgUpdateRoadOperatorResponse,
    MsgUpdateUserVault,
    MsgUpdateUserVaultResponse,
    MsgDeleteRoadOperator,
    MsgDeleteRoadOperatorResponse,
    MsgDeleteUserVault,
    MsgDeleteUserVaultResponse,
} from "../generated/tollroad/tx"

export const typeUrlMsgCreateRoadOperator =
    "/b9lab.tollroad.tollroad.MsgCreateRoadOperator"
export const typeUrlMsgCreateRoadOperatorResponse =
    "/b9lab.tollroad.tollroad.MsgCreateRoadOperatorResponse"
export const typeUrlMsgUpdateRoadOperator =
    "/b9lab.tollroad.tollroad.MsgUpdateRoadOperator"
export const typeUrlMsgUpdateRoadOperatorResponse =
    "/b9lab.tollroad.tollroad.MsgUpdateRoadOperatorResponse"
export const typeUrlMsgDeleteRoadOperator =
    "/b9lab.tollroad.tollroad.MsgDeleteRoadOperator"
export const typeUrlMsgDeleteRoadOperatorResponse =
    "/b9lab.tollroad.tollroad.MsgDeleteRoadOperatorResponse"
export const typeUrlMsgCreateUserVault =
    "/b9lab.tollroad.tollroad.MsgCreateUserVault"
export const typeUrlMsgCreateUserVaultResponse =
    "/b9lab.tollroad.tollroad.MsgCreateUserVaultResponse"
export const typeUrlMsgUpdateUserVault =
    "/b9lab.tollroad.tollroad.MsgUpdateUserVault"
export const typeUrlMsgUpdateUserVaultResponse =
    "/b9lab.tollroad.tollroad.MsgUpdateUserVaultResponse"
export const typeUrlMsgDeleteUserVault =
    "/b9lab.tollroad.tollroad.MsgDeleteUserVault"
export const typeUrlMsgDeleteUserVaultResponse =
    "/b9lab.tollroad.tollroad.MsgDeleteUserVaultResponse"

export const tollroadTypes: ReadonlyArray<[string, GeneratedType]> = [
    [typeUrlMsgCreateRoadOperator, MsgCreateRoadOperator],
    [typeUrlMsgCreateRoadOperatorResponse, MsgCreateRoadOperatorResponse],
    [typeUrlMsgUpdateRoadOperator, MsgUpdateRoadOperator],
    [typeUrlMsgUpdateRoadOperatorResponse, MsgUpdateRoadOperatorResponse],
    [typeUrlMsgDeleteRoadOperator, MsgDeleteRoadOperator],
    [typeUrlMsgDeleteRoadOperatorResponse, MsgDeleteRoadOperatorResponse],
    [typeUrlMsgCreateUserVault, MsgCreateUserVault],
    [typeUrlMsgCreateUserVaultResponse, MsgCreateUserVaultResponse],
    [typeUrlMsgUpdateUserVault, MsgUpdateUserVault],
    [typeUrlMsgUpdateUserVaultResponse, MsgUpdateUserVaultResponse],
    [typeUrlMsgDeleteUserVault, MsgDeleteUserVault],
    [typeUrlMsgDeleteUserVaultResponse, MsgDeleteUserVaultResponse],
]

//CreateRoadOperator
export interface MsgCreateRoadOperatorEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgCreateRoadOperator"
    readonly value: Partial<MsgCreateRoadOperator>
}

export function isMsgCreateRoadOperatorEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateRoadOperatorEncodeObject {
    return (
        (encodeObject as MsgCreateRoadOperatorEncodeObject).typeUrl ===
        typeUrlMsgCreateRoadOperator
    )
}
//CreateRoadOperatorResponse
export interface MsgCreateRoadOperatorResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgCreateRoadOperatorResponse"
    readonly value: Partial<MsgCreateRoadOperatorResponse>
}

export function isMsgCreateRoadOperatorResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateRoadOperatorResponseEncodeObject {
    return (
        (encodeObject as MsgCreateRoadOperatorResponseEncodeObject).typeUrl ===
        typeUrlMsgCreateRoadOperatorResponse
    )
}
//UpdateRoadOperator
export interface MsgUpdateRoadOperatorEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgUpdateRoadOperator"
    readonly value: Partial<MsgUpdateRoadOperator>
}

export function isMsgUpdateRoadOperatorEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgUpdateRoadOperatorEncodeObject {
    return (
        (encodeObject as MsgUpdateRoadOperatorEncodeObject).typeUrl ===
        typeUrlMsgUpdateRoadOperator
    )
}

//UpdateRoadOperatorResponse
export interface MsgUpdateRoadOperatorResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgUpdateRoadOperatorResponse"
    readonly value: Partial<MsgUpdateRoadOperatorResponse>
}

export function isMsgUpdateRoadOperatorResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgUpdateRoadOperatorResponseEncodeObject {
    return (
        (encodeObject as MsgUpdateRoadOperatorResponseEncodeObject).typeUrl ===
        typeUrlMsgUpdateRoadOperatorResponse
    )
}

//DeleteRoadOperator
export interface MsgDeleteRoadOperatorEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgDeleteRoadOperator"
    readonly value: Partial<MsgDeleteRoadOperator>
}

export function isMsgDeleteRoadOperatorEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgDeleteRoadOperatorEncodeObject {
    return (
        (encodeObject as MsgDeleteRoadOperatorEncodeObject).typeUrl ===
        typeUrlMsgDeleteRoadOperator
    )
}

//DeleteRoadOperatorResponse
export interface MsgDeleteRoadOperatorResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgDeleteRoadOperatorResponse"
    readonly value: Partial<MsgDeleteRoadOperatorResponse>
}

export function isMsgDeleteRoadOperatorResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgDeleteRoadOperatorResponseEncodeObject {
    return (
        (encodeObject as MsgDeleteRoadOperatorResponseEncodeObject).typeUrl ===
        typeUrlMsgDeleteRoadOperatorResponse
    )
}
//CreateUserVault
export interface MsgCreateUserVaultEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgCreateUserVault"
    readonly value: Partial<MsgCreateUserVault>
}

export function isMsgCreateUserVaultEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateUserVaultEncodeObject {
    return (
        (encodeObject as MsgCreateUserVaultEncodeObject).typeUrl ===
        typeUrlMsgCreateUserVault
    )
}

//CreateUserVaultResponse
export interface MsgCreateUserVaultResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgCreateUserVaultResponse"
    readonly value: Partial<MsgCreateUserVaultResponse>
}

export function isMsgCreateUserVaultResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateUserVaultResponseEncodeObject {
    return (
        (encodeObject as MsgCreateUserVaultResponseEncodeObject).typeUrl ===
        typeUrlMsgCreateUserVaultResponse
    )
}

//UpdateUserVault
export interface MsgUpdateUserVaultEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgUpdateUserVault"
    readonly value: Partial<MsgUpdateUserVault>
}

export function isMsgUpdateUserVaultEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgUpdateUserVaultEncodeObject {
    return (
        (encodeObject as MsgUpdateUserVaultEncodeObject).typeUrl ===
        typeUrlMsgUpdateUserVault
    )
}

//UpdateUserVaultResponse
export interface MsgUpdateUserVaultResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgUpdateUserVaultResponse"
    readonly value: Partial<MsgUpdateUserVaultResponse>
}

export function isMsgUpdateUserVaultResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgUpdateUserVaultResponseEncodeObject {
    return (
        (encodeObject as MsgUpdateUserVaultResponseEncodeObject).typeUrl ===
        typeUrlMsgUpdateUserVaultResponse
    )
}

//DeleteUserVault
export interface MsgDeleteUserVaultEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgDeleteUserVault"
    readonly value: Partial<MsgDeleteUserVault>
}

export function isMsgDeleteUserVaultEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgDeleteUserVaultEncodeObject {
    return (
        (encodeObject as MsgDeleteUserVaultEncodeObject).typeUrl ===
        typeUrlMsgDeleteUserVault
    )
}

//DeleteUserVaultResponse
export interface MsgDeleteUserVaultResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/b9lab.tollroad.tollroad.MsgDeleteUserVaultResponse"
    readonly value: Partial<MsgDeleteUserVaultResponse>
}

export function isMsgDeleteUserVaultResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgDeleteUserVaultResponseEncodeObject {
    return (
        (encodeObject as MsgDeleteUserVaultResponseEncodeObject).typeUrl ===
        typeUrlMsgDeleteUserVaultResponse
    )
}
