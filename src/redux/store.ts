import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './auth/reducers';
import storeReducer from './store/reducers';
import inventoryReducer from './inventory/reducers';

const rootReducer = combineReducers({
  userReducer,
  storeReducer,
  inventoryReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
