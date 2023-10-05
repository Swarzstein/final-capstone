import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './sessionReducer/sessionReducer';
import tripPackageSlice from './tripPackageSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    tripPackages: tripPackageSlice,
  },
});

export default store;