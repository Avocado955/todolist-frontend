import { ToDoListData } from "../components/ToDoListForm/schema";


const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export interface ToDoListResponse {
  id: number;
  task: string;
  category: CategoryResponse;
  isCompleted: string;
  createdAt: string;
  updatedAt: string; 
}

export interface CategoryResponse {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  todos: string[];
}

export const getAllCategories = async () => {
  const response = await fetch(baseURL + '/categories');
  if (!response.ok) {
    throw new Error("Failed to fetch all Categories");
  }
  return await response.json();
}

export const getAllToDos = async () => {
  const response = await fetch(baseURL + '/todos');
  if (!response.ok) {
    throw new Error("Failed to fetch all Todos");
  }
  return await response.json();
}

export const getToDoById = async (id: number) => {
  const response = await fetch(baseURL + '/todos/' + id);
  if(!response.ok) {
    if (response.status === 404) {
      throw new Error(await response.text());
    }
    throw new Error("Something went wrong");
  }
  return await response.json() as ToDoListResponse;
}

export const updateToDoById = async (id: number, data: ToDoListData) => {
  const response = await fetch(baseURL + '/todos/' + id, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  });
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(await response.text());
    }
    throw new Error("Something went wrong");
  }
  return (await response.json()) as ToDoListResponse;
}

export const createToDo = async (data: ToDoListData) => {
  const response = await fetch(baseURL + "/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'content-type':'application/json'
    }
  });
  if (!response.ok) {
    throw new Error("Failed to create new todo");
  }
  return await response.json() as ToDoListResponse;
}

export const deleteToDoById = async (id: number) => {
  const response = await fetch(baseURL + "/todos/" + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Todo with id: " + id + " not found");
  }
  return true;
}