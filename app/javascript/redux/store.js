import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './sessionReducer/sessionReducer';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export default store;