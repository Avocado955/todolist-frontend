import styles from "./CardDisplay.module.scss";
import { getToDoById, ToDoListResponse } from "../../services/todoservices";
import Card from "../../components/Card/Card";
import { useContext, useEffect, useState } from "react";
import { ToDoListData } from "../../components/ToDoListForm/schema";
import ToDoListForm from "../../components/ToDoListForm/ToDoListForm";
import { TodoContext } from "../../contexts/TodoContextProvider";


const CardDisplay = () => {
  const [todoDialogEdit, setTodoDialogEdit] = useState<HTMLDialogElement | null>(null);
  const [todo, setTodo] = useState<ToDoListResponse | undefined>(undefined);
  const {todoData, onTodoUpdate} = useContext(TodoContext);

  useEffect(() => {
    const foundTodoDialog = document.getElementById('todoFormEdit') as HTMLDialogElement;
    setTodoDialogEdit(foundTodoDialog);
  }, [])


  const onToDoSubmit = (data: ToDoListData) => {
    if (todo != null) {
      onTodoUpdate(todo.id, data).then(closeTodoDialog);
    }
  }
  
  const openTodoDialog = async (todoId: number) => {
    getToDoById(todoId).then(result => setTodo(result)).catch(e => console.log(e));
    console.log(todo);
    if (todoDialogEdit?.open) {
      todoDialogEdit?.close();
    } else {
      todoDialogEdit?.showModal();
    }
  }

  const closeTodoDialog = () => {
    todoDialogEdit?.close();
  }


  return (
    <div className={styles.cardDisplay}>
      <div className={styles.sections}>
        <h2>To Do</h2>
        {todoData && todoData.filter(todo => !Boolean(todo.isCompleted)).map(todo => <Card key={todo.id} todo={todo} onEditClick={openTodoDialog}/>)}
      </div>
      <div className={styles.sections}>
        <h2>Completed</h2>
        {todoData && todoData.filter(todo => Boolean(todo.isCompleted)).map(todo => <Card key={todo.id} todo={todo} onEditClick={openTodoDialog}/>)}
      </div>
      <dialog id="todoFormEdit" className={styles.modal} >
        {todo && <ToDoListForm onSubmit={onToDoSubmit} mode="EDIT" defaultValue={todo}></ToDoListForm>}
        <button className={styles.modal_close} onClick={closeTodoDialog}>X</button>
      </dialog>
    </div>
  )
}
export default CardDisplay