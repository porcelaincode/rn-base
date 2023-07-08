// set store
export const SET_STORE = 'SET_STORE';
export const REMOVE_STORE = 'REMOVE_STORE';

export const setStore = (store: any) => (dispatch: any) => {
  dispatch({
    type: SET_STORE,
    payload: store,
  });
};

export const removeStore = () => (dispatch: any) => {
  dispatch({
    type: REMOVE_STORE,
  });
};
