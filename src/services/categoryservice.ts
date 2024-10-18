import { CategoryData } from "../components/CategoryForm/schema";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

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

export const getCategoryById = async (id: number) => {
  const response = await fetch(baseURL + '/categories/' + id);
  if(!response.ok) {
    if (response.status === 404) {
      throw new Error(await response.text());
    }
    throw new Error("Something went wrong with getCategoryById");
  }
  return await response.json() as CategoryResponse;
}

export const createNewCategory = async (data: CategoryData) => {
  const response = await fetch(baseURL + "/categories", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'content-type':'application/json'
    }
  });
  if (!response.ok) {
    throw new Error("Failed to create new Category");
  }
  return await response.json() as CategoryResponse;

}

export const updateCategoryById = async (id: number, data: CategoryData) => {
  const response = await fetch(baseURL + '/categories/' + id, {
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
    throw new Error("Something went wrong with updateByCategoryId");
  }
  return (await response.json()) as CategoryResponse;
}

export const deleteCategoryById = async (id: string) => {
  const response = await fetch(baseURL + "/categories/" + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Category with id: " + id + " not found");
  }
  return true;
}