import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { rootWatcher } from "./sagas/rootSaga";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);

export default store;
