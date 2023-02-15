package keeper

import (
	"context"

	types "github.com/b9lab/toll-road/x/tollroad/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateUserVault(goCtx context.Context, msg *types.MsgCreateUserVault) (*types.MsgCreateUserVaultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetUserVault(
		ctx,
		msg.Creator,
		msg.RoadOperatorIndex,
		msg.Token,
	)
	if isFound {
		return nil, sdkerrors.Wrap(types.ErrIndexSet, "index already set")
	}
	if msg.Balance == 0 {
		return nil, sdkerrors.Wrap(types.ErrZeroTokens, "index already set")
	}

	var userVault = types.UserVault{
		//Creator:           msg.Creator,
		Owner:             msg.Creator,
		RoadOperatorIndex: msg.RoadOperatorIndex,
		Token:             msg.Token,
		Balance:           msg.Balance,
	}

	err := k.Keeper.CreateVault(ctx, &userVault)
	if err != nil {
		return nil, err
	}

	k.SetUserVault(
		ctx,
		userVault,
	)
	return &types.MsgCreateUserVaultResponse{}, nil
}

func (k msgServer) UpdateUserVault(goCtx context.Context, msg *types.MsgUpdateUserVault) (*types.MsgUpdateUserVaultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if msg.Balance == 0 {
		return nil, sdkerrors.Wrap(types.ErrZeroTokens, "index already set")
	}
	//Check if the value exists
	valFound, isFound := k.GetUserVault(
		ctx,
		msg.Creator,
		msg.RoadOperatorIndex,
		msg.Token,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	balance := msg.Balance
	userToModuleFlag := true
	if msg.Balance > valFound.Balance {
		balance = msg.Balance - valFound.Balance
		userToModuleFlag = true
	} else if msg.Balance < valFound.Balance {
		balance = valFound.Balance - msg.Balance
		userToModuleFlag = false
	}

	var userVault = types.UserVault{
		//Creator:           msg.Creator,
		Owner:             msg.Creator,
		RoadOperatorIndex: msg.RoadOperatorIndex,
		Token:             msg.Token,
		//Balance:           msg.Balance,
		Balance: balance,
	}

	if userToModuleFlag == true {
		err := k.Keeper.UpdateVaultUserToModule(ctx, &userVault)
		if err != nil {
			return nil, err
		}
	} else if userToModuleFlag == false {
		err := k.Keeper.UpdateVaultModuleToUser(ctx, &userVault)
		if err != nil {
			return nil, err
		}
	}
	userVault = types.UserVault{
		//Creator:           msg.Creator,
		Owner:             msg.Creator,
		RoadOperatorIndex: msg.RoadOperatorIndex,
		Token:             msg.Token,
		Balance:           msg.Balance,
		//Balance: balance,
	}

	k.SetUserVault(ctx, userVault)

	return &types.MsgUpdateUserVaultResponse{}, nil
}

func (k msgServer) DeleteUserVault(goCtx context.Context, msg *types.MsgDeleteUserVault) (*types.MsgDeleteUserVaultResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetUserVault(
		ctx,
		msg.Creator,
		msg.RoadOperatorIndex,
		msg.Token,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	err := k.Keeper.DeleteVault(ctx, &valFound)
	if err != nil {
		return nil, err
	}

	k.RemoveUserVault(
		ctx,
		msg.Creator,
		msg.RoadOperatorIndex,
		msg.Token,
	)

	return &types.MsgDeleteUserVaultResponse{}, nil
}
