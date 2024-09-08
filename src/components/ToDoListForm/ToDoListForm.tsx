import {useForm} from "react-hook-form";
import { ToDoListData, schema } from "./schema";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./ToDoListForm.module.scss";
import { useEffect, useState } from "react";
import { CategoryResponse, getAllCategories } from "../../services/todoservices";


interface ToDoListFormProps {
  onSubmit: (data: ToDoListData) => unknown;
}

const ToDoListForm = ({onSubmit}: ToDoListFormProps) => {
  const {reset, register, formState:{errors, isSubmitSuccessful}, handleSubmit} = useForm<ToDoListData>({resolver: zodResolver(schema)});

  const [categories, setCategories] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data)
    }).catch(e => console.log(e));
  }, [])
  
  isSubmitSuccessful && reset();

  return (
    <form className={styles.toDoListForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" placeholder="Task" {...register('task')} />
      </div>
        {errors?.task && <small className={styles.error_text}>{errors.task.message}</small>}
      <div className={styles.field}>
        <label htmlFor="categoryId">Category</label>
        <select id="catergoryId" {...register('categoryId')}>
          {categories && categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
        </select>
      </div>
        {errors?.categoryId && <small className={styles.error_text}>Select an option or create a Category</small>}
      <div>
        <label htmlFor="completed">Completed?</label>
        <input type="checkbox" id="completed" {...register('isCompleted')} />
      </div>
    <button className={styles.form_Btn} type="submit">Submit</button>
    </form>
  )
}
export default ToDoListForm