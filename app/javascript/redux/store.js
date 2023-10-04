import { configureStore } from '@reduxjs/toolkit';
import tripPackageSlice from './tripPackageSlice';

const store = configureStore({
  reducer: {
    
    tripPackages: tripPackageSlice
  },
});

export default store;