import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import reducers from '../reducers/category/reducers';
import { TCategoryState } from '../types/states';
import { TRequestStatus } from '../types/request';

const initialState: TCategoryState & TRequestStatus = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => reducers(builder),
});

export default categorySlice.reducer;
