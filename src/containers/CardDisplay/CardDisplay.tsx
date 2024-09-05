import { useEffect, useState } from "react";
import styles from "./CardDisplay.module.scss";
import { CategoryResponse, getAllCategories, getAllToDos, getToDoById, ToDoListResponse } from "../../services/todoservices";

const CardDisplay = () => {
  const [todos, setTodos] = useState<ToDoListResponse>();

  useEffect(() => {
    getToDoById(2).then(data => {
      setTodos(data)
    }).catch(e => console.log(e));
  }, [])

  const logAPICall = () => {
    console.log(todos);
  }

  return (
    <div className={styles.cardDisplay}>
      CardDisplay
      <button onClick={logAPICall}>Log API Call</button>
    </div>
  )
}
export default CardDisplay