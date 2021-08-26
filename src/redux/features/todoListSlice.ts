import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';


type TodoState = {
  id: string;
  name: string;
  title: string;
  text: string;
}

export const todoListSl = createSlice({
  name: 'todoList',
  initialState: [] as TodoState[],
  reducers: { 
    addTodo:  {
      reducer: (state, action: PayloadAction<TodoState>) => {
        state.push(action.payload);

      },
      prepare: (title: string, text: string, name: string) => {
        const id = nanoid();
        return {payload: {id, title, text, name}};

      }
    },
    removeTodo: (state, action) => {
      let index = state.map(el => el.id).indexOf(action.payload);
      state.splice(index, 1);

    },
    updateTodo: (state, action) => {
      const { id, title, text, name } = action.payload;
      const existingTodo = state.find(el => el.id === id);

      if(existingTodo) {
        existingTodo.name = name;
        existingTodo.title = title;
        existingTodo.text = text;

      }

    },
    cloneTodo: (state, action: PayloadAction<TodoState[]>) => {
      action.payload.map(el => state.push(el));
      
    }
  }
});

export const { 
  addTodo, 
  removeTodo, 
  updateTodo, 
  cloneTodo,
} = todoListSl.actions;


export default todoListSl.reducer;