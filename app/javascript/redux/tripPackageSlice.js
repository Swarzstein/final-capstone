import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../api/apiUrl'; 

// Async thunk for fetching trip packages
export const fetchTripPackagesAsync = createAsyncThunk(
  'tripPackage/fetchTripPackages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/trip_packages`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state for trip packages
const initialState = {
  tripPackages: [],
  selectedTripPackage: null,
  status: 'idle', 
  error: null, 
};

// Define the tripPackage slice
const tripPackageSlice = createSlice({
  name: 'tripPackage',
  initialState,
  reducers: {
    setSelectedTripPackage: (state, action) => {
      state.selectedTripPackage = action.payload;
    },
    clearSelectedTripPackage: (state) => {
      state.selectedTripPackage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTripPackagesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTripPackagesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tripPackages = action.payload;
      })
      .addCase(fetchTripPackagesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export actions and async thunk
export const { setSelectedTripPackage, clearSelectedTripPackage } = tripPackageSlice.actions;
export { fetchTripPackagesAsync }; 

// Export the reducer
export default tripPackageSlice.reducer;
