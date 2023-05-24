import { categoryAdapter } from './adapters';
import { TCategoryState } from '../../types/states';
import { getCategories } from './dispatch';

const reducers = (builder: any) => {
  builder
    .addCase(
      getCategories.pending,
      (state: TCategoryState, { payload }: any) => {
        return {
          ...state,
          isLoading: true,
        };
      }
    )
    .addCase(
      getCategories.rejected,
      (state: TCategoryState, { payload }: any) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
    )
    .addCase(
      getCategories.fulfilled,
      (state: TCategoryState, { payload }: any) => {
        return {
          ...state,
          isLoading: false,
          categories: categoryAdapter(payload),
        };
      }
    );
};

export default reducers;
