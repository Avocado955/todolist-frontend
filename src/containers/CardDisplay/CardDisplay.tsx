import styles from "./CardDisplay.module.scss";
import { ToDoListResponse } from "../../services/todoservices";
import Card from "../../components/Card/Card";

interface CardDisplayProps {
  todos: ToDoListResponse[];
}

const CardDisplay = ({todos}: CardDisplayProps) => {

  return (
    <div className={styles.cardDisplay}>
     {todos && todos.map(todo => <Card key={todo.id} todo={todo}/>)}
    </div>
  )
}
export default CardDisplay