import styles from "./Card.module.scss";
import { ToDoListResponse, updateToDoById } from "../../services/todoservices";
import { useEffect, useState } from "react";
import ToDoListForm from "../ToDoListForm/ToDoListForm";
import { ToDoListData } from "../ToDoListForm/schema";


interface CardProps {
  todo: ToDoListResponse;
  onEditClick: (todoId: number) => unknown;
}

const Card = ({todo, onEditClick}:CardProps) => {
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
      <div className={styles.card_details}>
        <h2 className={styles.card_textMargin}>{todo.task}</h2>
        <div className={styles.sectionRow}>
          <h4 className={styles.card_textMargin}>Category: {todo.category.name}</h4>
          <label htmlFor="isCompleted" className={styles.cursorChange}>Is Completed</label>
          <input type="checkbox" name="isCompleted" id="isCompleted" checked={checkedState} onChange={valueChanged} className={styles.cursorChange} />
        </div>
      </div>
      <div className={styles.sectionColumn}>
        <button className={styles.editBtn} onClick={() => onEditClick(todo.id)}>Edit</button>
        <button className={styles.duplicateBtn}>Duplicate</button>
      </div>
     
    </div>
  )
}
export default Card