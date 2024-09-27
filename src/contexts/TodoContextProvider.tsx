import React, { createContext, useEffect, useState } from "react";
import { getAllToDos, ToDoListResponse } from "../services/todoservices";
import { ToDoListData } from "../components/ToDoListForm/schema";

interface TodoContextValues {
  todoData: ToDoListResponse[];
  onTodoCreate: (data: ToDoListData) => Promise<unknown>;
  onTodoDelete: (id: string) => Promise<unknown>;
}

export const TodoContext = createContext<TodoContextValues>({
  todoData: [],
  onTodoCreate: async (data: ToDoListData) => console.log(data),
  onTodoDelete: async (id: string) => console.log(id),
});

interface TodoContextProviderProps {
  children?: React.ReactNode;
}

const TodoContextProvider = ({children} : TodoContextProviderProps) => {
  const [todoData, setTodoData] = useState<ToDoListResponse[]>([]);

  useEffect(() => {
    getAllToDos().then((data) => setTodoData(data));
  }, []);

  const onTodoCreate = async (data: ToDoListData) => {

  };

  const onTodoDelete = async (id: string) => {

  };

  return (
    <TodoContext.Provider
      value={{todoData, onTodoCreate, onTodoDelete}}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;