package keeper

import (
	"github.com/b9lab/toll-road/x/tollroad/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k *Keeper) CreateVault(ctx sdk.Context, userVault *types.UserVault) error {
	address, err := sdk.AccAddressFromBech32(userVault.GetOwner())
	if err != nil {
		panic(err.Error())
	}
	balance_temp := sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(int64(userVault.GetBalance())))
	balance := sdk.NewCoins(balance_temp)
	err = k.bank.SendCoinsFromAccountToModule(ctx, address, types.ModuleName, balance)
	if err != nil {
		return sdkerrors.Wrapf(err, types.ErrZeroTokens.Error())
	}
	return nil
}

func (k *Keeper) DeleteVault(ctx sdk.Context, userVault *types.UserVault) error {
	address, err := sdk.AccAddressFromBech32(userVault.GetOwner())
	if err != nil {
		panic(err.Error())
	}
	balance_temp := sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(int64(userVault.GetBalance())))
	balance := sdk.NewCoins(balance_temp)
	err = k.bank.SendCoinsFromModuleToAccount(ctx, types.ModuleName, address, balance)
	if err != nil {
		panic(types.ErrBank.Error())
		//panic(fmt.Sprintf(types.ErrBank.Error(), err.Error()))
		//return sdkerrors.Wrapf(err, types.ErrBank.Error())
	}
	return nil
}

func (k *Keeper) UpdateVaultUserToModule(ctx sdk.Context, userVault *types.UserVault) error {
	address, err := sdk.AccAddressFromBech32(userVault.GetOwner())
	if err != nil {
		panic(err.Error())
	}
	balance_temp := sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(int64(userVault.GetBalance())))
	balance := sdk.NewCoins(balance_temp)
	err = k.bank.SendCoinsFromAccountToModule(ctx, address, types.ModuleName, balance)
	if err != nil {
		//panic(err.Error())
		return sdkerrors.Wrapf(err, types.ErrBank.Error())
	}
	return nil
}

func (k *Keeper) UpdateVaultModuleToUser(ctx sdk.Context, userVault *types.UserVault) error {
	address, err := sdk.AccAddressFromBech32(userVault.GetOwner())
	if err != nil {
		panic(err.Error())
	}
	balance_temp := sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(int64(userVault.GetBalance())))
	balance := sdk.NewCoins(balance_temp)
	err = k.bank.SendCoinsFromModuleToAccount(ctx, types.ModuleName, address, balance)
	if err != nil {
		panic(types.ErrBank.Error())
		//panic(fmt.Sprintf(types.ErrBank.Error(), err.Error()))
		//return sdkerrors.Wrapf(err, types.ErrBank.Error())
	}
	return nil
}
