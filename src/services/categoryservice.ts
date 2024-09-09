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