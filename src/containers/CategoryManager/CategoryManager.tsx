import styles from "./CategoryManager.module.scss";
import { useContext, useEffect, useState } from "react";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { CategoryData } from "../../components/CategoryForm/schema";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { CategoryContext } from "../../contexts/CategoryContextProvider";

const CategoryManager = () => {
  const {categoryData} = useContext(CategoryContext);

  useEffect(() => {
  }, [])

  const onCategorySubmit = (data: CategoryData) => {
    console.log(data);
  }

  return (
    <div className={styles.categoryManager}>
      <div className={styles.categoryCardDisplay}>
        {/* all current categories */}
        {categoryData && categoryData.map(category => <CategoryCard key={category.id} category={category} />)}
      </div>
      <CategoryForm onSubmit={onCategorySubmit}></CategoryForm>
    </div>
  )
}
export default CategoryManager