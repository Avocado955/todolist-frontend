import styles from "./CardDisplay.module.scss";
import { ToDoListResponse } from "../../services/todoservices";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

interface CardDisplayProps {
  todos: ToDoListResponse[];
}

const CardDisplay = ({todos}: CardDisplayProps) => {
  const [incomplete, setIncomplete] = useState<ToDoListResponse[]>([]);
  const [Complete, setComplete] = useState<ToDoListResponse[]>([]);


  useEffect(() => {
    // Assign all incomplete and complete with a check if any change and get it to update
  }, [])

  return (
    <div className={styles.cardDisplay}>
     {todos && todos.map(todo => <Card key={todo.id} todo={todo}/>)}
    </div>
  )
}
export default CardDisplay