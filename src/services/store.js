import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

/* 
  Store: global state that saves the entire info of my app
  Reducer: the selected portion of the store that I need
*/
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
