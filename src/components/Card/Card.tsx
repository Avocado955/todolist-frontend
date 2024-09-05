import styles from "./Card.module.scss";
import { ToDoListResponse } from "../../services/todoservices";

interface CardProps {
  todo: ToDoListResponse;
}

const Card = ({todo}:CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card_textMargin}>{todo.task}</h3>
      <div className={styles.card_details}>
        <div>
          <h4 className={styles.card_textMargin}>{todo.category.name}</h4>
        </div>
        <div>
          <label htmlFor="isCompleted">Is Completed</label>
          <input type="checkbox" name="isCompleted" id="isCompleted" value={todo.isCompleted} />
        </div>
      </div>
    </div>
  )
}
export default Card