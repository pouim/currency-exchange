import { configureStore } from "@reduxjs/toolkit";

import currencyConvertorFormReducer from "features/convert-currency/store/index";
import conversionHistoryReducer from "pages/conversion-history/store/index";
import statisticsReducer from "features/exchange-history/store/index";
import { exchangeApi } from "services/exchange";

export const store = configureStore({
  reducer: {
    [exchangeApi.reducerPath]: exchangeApi.reducer,
    form: currencyConvertorFormReducer,
    statistics: statisticsReducer,
    conversionHistory: conversionHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
