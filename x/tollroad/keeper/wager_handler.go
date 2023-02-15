package keeper

import (
	"github.com/b9lab/toll-road/x/tollroad/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k *Keeper) CreateVault(ctx sdk.Context, userVault *types.UserVault) error {

	address, err := sdk.AccAddressFromBech32(userVault.GetOwner())
	balance := sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(int64(userVault.GetBalance())))
	b := sdk.NewCoins(balance)
	if err != nil {
		panic(err.Error())
	}
	err = k.bank.SendCoinsFromAccountToModule(ctx, address, types.ModuleName, b)
	if err != nil {
		return sdkerrors.Wrapf(err, types.ErrZeroTokens.Error())
	}
	return nil
}
