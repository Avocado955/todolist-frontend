import {useForm} from "react-hook-form";
import { ToDoListData, schema } from "./schema";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./ToDoListForm.module.scss";


interface ToDoListFormProps {
  onSubmit: (data: ToDoListData) => unknown;
}

const ToDoListForm = ({onSubmit}: ToDoListFormProps) => {
  const {reset, register, formState:{errors, isSubmitSuccessful}, handleSubmit} = useForm<ToDoListData>({resolver: zodResolver(schema)});
  
  isSubmitSuccessful && reset();

  return (
    <form className={styles.toDoListForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" placeholder="Task" {...register('task')} />
        {errors?.task && <small className={styles.error_text}>{errors.task.message}</small>}
      </div>
      <div className={styles.field}>
        <label htmlFor="category">Category</label>
        <select id="catergory" {...register('category')}>
          {/* Make this pull from the db and get all current categories */}
          <option value=""></option>
        </select>
        {errors?.task && <small className={styles.error_text}>{errors.task.message}</small>}
      </div>
      <div>
        <label htmlFor="completed">Completed?</label>
        <input type="checkbox" id="completed" {...register('isComplete')} />
      </div>

    </form>
  )
}
export default ToDoListForm