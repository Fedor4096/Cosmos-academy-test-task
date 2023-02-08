package keeper

import (
	"context"
	"fmt"
	"github.com/b9lab/toll-road/x/tollroad/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"
)

func (k msgServer) CreateRoadOperator(goCtx context.Context, msg *types.MsgCreateRoadOperator) (*types.MsgCreateRoadOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	currentSystemInfoState, found := k.GetSystemInfo(ctx)
	if found == false {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "SystemInfo not found")
	}
	nextId := strconv.FormatUint(currentSystemInfoState.GetNextOperatorId(), 10)
	fmt.Println(nextId)
	// Check if the value already exists
	_, isFound := k.GetRoadOperator(
		ctx,
		string(nextId),
	)
	if isFound == true {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	if msg.Creator != "" && msg.Name != "" && msg.Token != "" && msg.Active != false {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "wrong values")
	}

	var roadOperator = types.RoadOperator{
		Creator: msg.Creator,
		Index:   string(nextId),
		Name:    msg.Name,
		Token:   msg.Token,
		Active:  msg.Active,
	}

	k.SetRoadOperator(
		ctx,
		roadOperator,
	)

	//nextIdi, _ := strconv.Atoi(nextId)
	//var systemInfo = types.SystemInfo{
	//	NextOperatorId: (uint64(nextIdi) + 1),
	//}
	currentSystemInfoState.NextOperatorId++
	k.Keeper.SetSystemInfo(ctx, currentSystemInfoState)
	//k.SetSystemInfo(
	//	ctx,
	//	systemInfo,
	//)

	return &types.MsgCreateRoadOperatorResponse{Index: nextId}, nil
}

func (k msgServer) UpdateRoadOperator(goCtx context.Context, msg *types.MsgUpdateRoadOperator) (*types.MsgUpdateRoadOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRoadOperator(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var roadOperator = types.RoadOperator{
		Creator: msg.Creator,
		Index:   msg.Index,
		Name:    msg.Name,
		Token:   msg.Token,
		Active:  msg.Active,
	}

	k.SetRoadOperator(ctx, roadOperator)

	return &types.MsgUpdateRoadOperatorResponse{}, nil
}

func (k msgServer) DeleteRoadOperator(goCtx context.Context, msg *types.MsgDeleteRoadOperator) (*types.MsgDeleteRoadOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRoadOperator(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRoadOperator(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteRoadOperatorResponse{}, nil
}
