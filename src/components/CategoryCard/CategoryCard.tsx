import { CategoryResponse } from "../../services/categoryservice";
import styles from "./CategoryCard.module.scss";
import bin from "../../assets/bin.png";

interface CategoryCardProps {
  category: CategoryResponse;
}

const CategoryCard = ({category}: CategoryCardProps) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.text}>
        <h3>{category.name}</h3>
        <p>uses: {category.todos.length}</p>
      </div>
      <div>
        <button className={styles.btn}>Edit</button>
        <button className={styles.btn_delete}><img src={bin} alt="delete" className={styles.deleteImg}/></button>
      </div>
    </div>
    
  )
}
export default CategoryCard