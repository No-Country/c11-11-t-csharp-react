import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/app/lib/api';
import paths from '@/app/constants/paths';

const getCategories = createAsyncThunk('get/all', async (_, thunkApi) =>
  api({
    url: paths.GET_CATEGORIES,
    data: {},
    method: 'GET',
    thunk: thunkApi,
  })
);

export { getCategories };
