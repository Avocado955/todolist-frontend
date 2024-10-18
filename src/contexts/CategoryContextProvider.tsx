import { createContext, useEffect, useState } from "react";
import { CategoryData } from "../components/CategoryForm/schema";
import { CategoryResponse, createNewCategory, deleteCategoryById, getAllCategories, updateCategoryById } from "../services/categoryservice";

interface CategoryContextValues {
  categoryData: CategoryResponse[];
  onCategoryCreate: (data: CategoryData) => Promise<unknown>;
  onCategoryUpdate: (id: number, data: CategoryData) => Promise<unknown>;
  onCategoryDelete: (id: string) => Promise<unknown>;
}

export const CategoryContext = createContext<CategoryContextValues>({
  categoryData: [],
  onCategoryCreate: async (data: CategoryData) => console.log(data),
  onCategoryUpdate: async (id: number, data: CategoryData) => console.log(id, data),
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

  const getCategories = async () => {
    getAllCategories().then((data) => setCategoryData(data));
  }

  const onCategoryCreate = async (data: CategoryData) => {
    try {
      const newCategory = await createNewCategory(data);
      setCategoryData([...categoryData, newCategory]);
    } catch (e) {
      console.log(e);
    }
  };

  const onCategoryUpdate = async (id: number, data: CategoryData) => {
    try {
      updateCategoryById(id, data).then(getCategories);
    } catch (e) {
      console.log(e);
    }
  };

  const onCategoryDelete = async (id: string) => {
    const deletedCategory = await deleteCategoryById(id);
    if (deletedCategory) {
      const filteredCategory = categoryData.filter(
        (category) => category.id !== parseInt(id)
      );
      setCategoryData(filteredCategory);
    } else {
      console.log("Failed to delete Category inside Context Provider with id: " + id)
    }
  };

  return (
    <CategoryContext.Provider
      value={{categoryData, onCategoryCreate, onCategoryUpdate, onCategoryDelete}}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider;