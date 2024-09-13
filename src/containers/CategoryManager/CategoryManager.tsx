import styles from "./CategoryManager.module.scss";
import { useEffect, useState } from "react";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { CategoryData } from "../../components/CategoryForm/schema";
import { CategoryResponse, getAllCategories } from "../../services/categoryservice";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const CategoryManager = () => {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data)
    }).catch(e => console.log(e));
  }, [])

  const onCategorySubmit = (data: CategoryData) => {
    console.log(data);
  }

  return (
    <div className={styles.categoryManager}>
      <div className={styles.categoryCardDisplay}>
        {/* all current categories */}
        {categories && categories.map(category => <CategoryCard key={category.id} category={category} />)}
      </div>
      <CategoryForm onSubmit={onCategorySubmit}></CategoryForm>
    </div>
  )
}
export default CategoryManager