import {IInventoryProductSchema} from '../../types';

// set inventory
export const SET_INVENTORY = 'SET_INVENTORY';

export const setInventory =
  (inventory: {id: string; products: Array<IInventoryProductSchema>}) =>
  (dispatch: any) => {
    dispatch({
      type: SET_INVENTORY,
      payload: inventory,
    });
  };
