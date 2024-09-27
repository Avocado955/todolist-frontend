import { createContext, useEffect, useState } from "react";
import { CategoryData } from "../components/CategoryForm/schema";
import { CategoryResponse, getAllCategories } from "../services/categoryservice";

interface CategoryContextValues {
  categoryData: CategoryResponse[];
  onCategoryCreate: (data: CategoryData) => Promise<unknown>;
  onCategoryDelete: (id: string) => Promise<unknown>;
}

export const CategoryContext = createContext<CategoryContextValues>({
  categoryData: [],
  onCategoryCreate: async (data: CategoryData) => console.log(data),
  onCategoryDelete: async (id: string) => console.log(id),
});

interface CategoryContextProviderProps {
  children?: React.ReactNode;
}

const CategoryContextProvider = ({children} : CategoryContextProviderProps) => {
  const [categoryData, setCategoryData] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategoryData(data));
  }, []);

  const onCategoryCreate = async (data: CategoryData) => {
    try {
    } catch (e) {
      
    }
  };

  const onCategoryDelete = async (id: string) => {

  };

  return (
    <CategoryContext.Provider
      value={{categoryData, onCategoryCreate, onCategoryDelete}}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider;