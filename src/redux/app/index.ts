import { configureStore } from '@reduxjs/toolkit';
import  todoListSlReducer  from '../features/todoListSlice';


const Store = configureStore({
  reducer: {
    todoList: todoListSlReducer,
  }
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch

export default Store;