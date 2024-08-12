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
        <input type="text" id="task" {...register('task')} />
        {errors?.task && <small className={styles.error_text}>{errors.task.message}</small>}
      </div>

    </form>
  )
}
export default ToDoListForm