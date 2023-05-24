import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CategoryReducer from '../slices/category';

import logger from 'redux-logger';

// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

// const authPersistReducer = persistReducer(persistConfig, authReducer);

// const persistConfig = {
// 	// configuration object for redux-persist
// 	key: 'root',
// 	storage, // define which storage to use
// 	whitelist: ['auth'],
// };

const rootReducer = combineReducers({
  category: CategoryReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

// const persistor = persistStore(store);

export { store };
