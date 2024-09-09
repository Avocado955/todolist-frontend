import styles from "./CardDisplay.module.scss";
import { ToDoListResponse } from "../../services/todoservices";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

interface CardDisplayProps {
  todos: ToDoListResponse[];
}

const CardDisplay = ({todos}: CardDisplayProps) => {
  const [incomplete, setIncomplete] = useState<ToDoListResponse[]>([]);
  const [complete, setComplete] = useState<ToDoListResponse[]>([]);


  useEffect(() => {
    // Assign all incomplete and complete with a check if any change and get it to update
    const mappedIncomplete = todos.filter(todo => Boolean(todo.isCompleted) == false);
    setIncomplete(mappedIncomplete);
    
    const mappedComplete = todos.filter(todo => Boolean(todo.isCompleted) == true);
    setComplete(mappedComplete);
  }, [todos])

  return (
    <div className={styles.cardDisplay}>
      <div className={styles.sections}>
        <h2>To Do</h2>
        {incomplete && incomplete.map(todo => <Card key={todo.id} todo={todo}/>)}
      </div>
      <div className={styles.sections}>
        <h2>Completed</h2>
        {complete && complete.map(todo => <Card key={todo.id} todo={todo}/>)}
      </div>
    </div>
  )
}
export default CardDisplay