import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {ApiSlice} from './slices/ApiSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createDebugger from 'redux-flipper';
import {appStateReducer} from './slices/Appstate';

const middlewares: any = [createDebugger(), ApiSlice.middleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  appState: appStateReducer,
  [ApiSlice.reducerPath]: ApiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }).concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export {store, persistor};
