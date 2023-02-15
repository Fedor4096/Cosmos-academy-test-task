package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/tollroad module sentinel errors
var (
	ErrSample     = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrZeroTokens = sdkerrors.Register(ModuleName, 1101, "zero tokens")
	ErrIndexSet   = sdkerrors.Register(ModuleName, 1102, "index already set")
)

//Your keeper has to be able to actually transfer tokens between the user and the module:
//
//On creating the vault:
//
//The balance amount is transferred from the user to the module.
//If the user does not have enough tokens, then it should return an error. See the tests for the details of messages.
//If the amount is 0 then it returns an error.
//
//
//On deleting the vault:
//
//The balance amount is transferred from the module to the user.
//If the module does not have enough tokens, it should panic. See the tests for the details of messages.
//
//
//On updating the vault:
//
//If the balance field in the message is higher than the current vault balance, the difference is transferred from the user to the module. And should return an error if it is not possible.
//If the balance field in the message is lower than the current vault balance, the difference is transferred from the module to the user. And should panic if it is not possible.
//If the balance field in the message is 0 then it returns an error, because conceptually, this should be a deletion.
