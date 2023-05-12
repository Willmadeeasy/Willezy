import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import projectListReducer from '../features/projectList/projectListSlice';
// import projectDetailsReducer from '../features/projectDetails/projectDetailsSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  reducer: {
    // projectListFlow: projectListReducer,
    // projectDetailsFlow:projectDetailsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;