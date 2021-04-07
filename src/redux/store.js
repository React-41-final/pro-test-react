import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

import { authReduser } from "./redusers/authReduser";
import { contactsReduser } from "./redusers/contactsReduser";
import { resultsReduser } from "./redusers/resultsReduser";
import { testReduser } from "./redusers/testReduser";

const authPersistConfig = {
  key: "auth",
  storage,
  // whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReduser),
  contacts: contactsReduser,
  resultsOfTest: resultsReduser,
  tests: testReduser,
  // loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
