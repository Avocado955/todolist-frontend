import styles from "./CardDisplay.module.scss";
import { getToDoById, ToDoListResponse } from "../../services/todoservices";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { ToDoListData } from "../../components/ToDoListForm/schema";
import ToDoListForm from "../../components/ToDoListForm/ToDoListForm";

interface CardDisplayProps {
  todos: ToDoListResponse[];
}

const CardDisplay = ({todos}: CardDisplayProps) => {
  const [todoDialogEdit, setTodoDialogEdit] = useState<HTMLDialogElement | null>(null);
  const [todo, setTodo] = useState<ToDoListResponse | undefined>(undefined);
  const [incomplete, setIncomplete] = useState<ToDoListResponse[]>([]);
  const [complete, setComplete] = useState<ToDoListResponse[]>([]);

  useEffect(() => {
    const foundTodoDialog = document.getElementById('todoFormEdit') as HTMLDialogElement;
    setTodoDialogEdit(foundTodoDialog);
  }, [])

  useEffect(() => {
    // Assign all incomplete and complete with a check if any change and get it to update
    const mappedIncomplete = todos.filter(todo => Boolean(todo.isCompleted) == false);
    setIncomplete(mappedIncomplete);
    
    const mappedComplete = todos.filter(todo => Boolean(todo.isCompleted) == true);
    setComplete(mappedComplete);
  }, [todos])


  const onToDoSubmit = (data: ToDoListData) => {
    console.log(data);
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
        {incomplete && incomplete.map(todo => <Card key={todo.id} todo={todo} onEditClick={openTodoDialog}/>)}
      </div>
      <div className={styles.sections}>
        <h2>Completed</h2>
        {complete && complete.map(todo => <Card key={todo.id} todo={todo} onEditClick={openTodoDialog}/>)}
      </div>
      <dialog id="todoFormEdit" className={styles.modal} >
        {todo && <ToDoListForm onSubmit={onToDoSubmit} mode="EDIT" defaultValues={todo}></ToDoListForm>}
        <button className={styles.modal_close} onClick={closeTodoDialog}>X</button>
      </dialog>
    </div>
  )
}
export default CardDisplay