import { useEffect, useState } from "react";
import styles from "./CardDisplay.module.scss";
import { CategoryResponse, getAllCategories } from "../../services/todoservices";

const CardDisplay = () => {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data)
    }).catch(e => console.log(e));
  }, [])

  const logCategories = () => {
    console.log(categories);
  }

  return (
    <div className={styles.cardDisplay}>
      CardDisplay
      <button onClick={logCategories}>Log Categories</button>
    </div>
  )
}
export default CardDisplay