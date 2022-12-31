import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import userConfigsReducer from 'config/store/index';
import currencyConvertorFormReducer from "features/convert-currency/store/index";
import conversionHistoryReducer from "pages/conversion-history/store/index";
import statisticsReducer from "features/exchange-history/store/index";
import { exchangeApi } from "services/exchange";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["statistics"],
};

const rootReducer = combineReducers({
  [exchangeApi.reducerPath]: exchangeApi.reducer,
  userConfigs: userConfigsReducer,
  form: currencyConvertorFormReducer,
  statistics: statisticsReducer,
  conversionHistory: conversionHistoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
