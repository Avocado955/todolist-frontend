import styles from "./Card.module.scss";
import { ToDoListResponse, updateToDoById } from "../../services/todoservices";
import { useState } from "react";


interface CardProps {
  todo: ToDoListResponse;
}

const Card = ({todo}:CardProps) => {
  const [checkedState, setCheckedState] = useState<boolean>(Boolean(todo.isCompleted));

  const valueChanged = () => {
    const isCompleteValue = !checkedState;
    setCheckedState(isCompleteValue);
    const newTodo = {task: todo.task, categoryId: todo.category.id.toString(), isCompleted: isCompleteValue};
    console.log(newTodo);
    updateToDoById(todo.id, newTodo).then(result => console.log(result)).catch(e => console.log(e));

  }

  return (
    <div className={styles.card}>
      <h2 className={styles.card_textMargin}>{todo.task}</h2>
      <div className={styles.card_details}>
        <div>
          <h4 className={styles.card_textMargin}>Category: {todo.category.name}</h4>
        </div>
        <div>
          <label htmlFor="isCompleted">Is Completed</label>
          <input type="checkbox" name="isCompleted" id="isCompleted" checked={checkedState} onChange={valueChanged} />
        </div>
      </div>
    </div>
  )
}
export default Card