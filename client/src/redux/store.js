import { configureStore } from "@reduxjs/toolkit";
import  shopSlice  from "./shops/reducers";
import productSlice from './products/reducers';
import cart from './cart/reducers';
import orderSlice from './orders/reducer';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
  // blacklist: ["filter"],
};

const persistedCartReducer = persistReducer(persistConfig, cart);
const persistedOrderReducer = persistReducer(persistConfig, orderSlice)

export const store = configureStore({
  reducer: {
    shop: shopSlice,
    product: productSlice,
    cart: persistedCartReducer,
    order: persistedOrderReducer,
    // cart: cart,
    // orders: orderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }
    ).concat(sagaMiddleware),
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);