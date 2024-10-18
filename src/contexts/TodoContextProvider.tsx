import React, { createContext, useEffect, useState } from "react";
import { createToDo, deleteToDoById, getAllToDos, ToDoListResponse, updateToDoById } from "../services/todoservices";
import { ToDoListData } from "../components/ToDoListForm/schema";

interface TodoContextValues {
  todoData: ToDoListResponse[];
  onTodoCreate: (data: ToDoListData) => Promise<unknown>;
  onTodoUpdate: (id: number, data: ToDoListData) => Promise<unknown>;
  onTodoDelete: (id: string) => Promise<unknown>;
}

export const TodoContext = createContext<TodoContextValues>({
  todoData: [],
  onTodoCreate: async (data: ToDoListData) => console.log(data),
  onTodoUpdate: async (id: number, data: ToDoListData) => console.log(id, data),
  onTodoDelete: async (id: string) => console.log(id),
});

interface TodoContextProviderProps {
  children?: React.ReactNode;
}

const TodoContextProvider = ({children} : TodoContextProviderProps) => {
  const [todoData, setTodoData] = useState<ToDoListResponse[]>([]);

  useEffect(() => {
    getTodos().then();
  }, []);

  const getTodos = async () => {
    getAllToDos().then((data) => setTodoData(data));
  }

  const onTodoCreate = async (data: ToDoListData) => {
    try {
      const newTodo = await createToDo(data);
      setTodoData([...todoData, newTodo]);
    } catch (e) {
      console.log(e);
    }
  };

  const onTodoUpdate = async (id: number, data: ToDoListData) => {
    try {
      updateToDoById(id, data).then(getTodos); // have the getTodos inside the .then to allow for it to finish updating before refreshing the todosData
    } catch (e) {
      console.log(e);
    }
  }

  const onTodoDelete = async (id: string) => {
    const deletedTodo = await deleteToDoById(id);
    if (deletedTodo) {
      const filteredTodo = todoData.filter(
        (todo) => todo.id !== parseInt(id)
      );
      setTodoData(filteredTodo);
    } else {
      console.log("Failed to delete Todo inside Context provider with id: " + id);
    }
  };

  return (
    <TodoContext.Provider
      value={{todoData, onTodoCreate, onTodoUpdate, onTodoDelete}}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;