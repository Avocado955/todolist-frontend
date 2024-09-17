import styles from "./Card.module.scss";
import { ToDoListResponse, updateToDoById } from "../../services/todoservices";
import { useEffect, useState } from "react";
import ToDoListForm from "../ToDoListForm/ToDoListForm";
import { ToDoListData } from "../ToDoListForm/schema";


interface CardProps {
  todo: ToDoListResponse;
}

const Card = ({todo}:CardProps) => {
  const [todoDialog, setTodoDialog] = useState<HTMLDialogElement | null>(null);
  const [checkedState, setCheckedState] = useState<boolean>(Boolean(todo.isCompleted));

  useEffect(() => {
    const foundTodoDialog = document.getElementById('todoFormEdit') as HTMLDialogElement;
    setTodoDialog(foundTodoDialog);
  }, [])

  const valueChanged = () => {
    const isCompleteValue = !checkedState;
    setCheckedState(isCompleteValue);
    const newTodo = {task: todo.task, categoryId: todo.category.id.toString(), isCompleted: isCompleteValue};
    console.log(newTodo);
    updateToDoById(todo.id, newTodo).then(result => console.log(result)).catch(e => console.log(e));
  }

  const onToDoSubmit = (data: ToDoListData) => {
    console.log(data);
  }
  
  const openTodoDialog = () => {
    if (todoDialog?.open) {
      todoDialog?.close();
    } else {
      todoDialog?.showModal();
    }
  }

  const closeTodoDialog = () => {
    todoDialog?.close();
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
        <button className={styles.editBtn} onClick={openTodoDialog}>Edit</button>
        <button className={styles.duplicateBtn}>Duplicate</button>
      </div>
      <dialog id="todoFormEdit" className={styles.modal} >
        <ToDoListForm onSubmit={onToDoSubmit} mode="EDIT"></ToDoListForm>
        <button className={styles.modal_close} onClick={closeTodoDialog}>X</button>
      </dialog>
    </div>
  )
}
export default Card