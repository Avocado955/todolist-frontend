import { useForm } from "react-hook-form";
import { CategoryData, schema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./CategoryForm.module.scss";

interface CateogryFormProps {
  onSubmit: (data: CategoryData) => unknown;
}

const CategoryForm = ({onSubmit}: CateogryFormProps) => {
  const {reset, register, formState:{errors, isSubmitSuccessful}, handleSubmit} = useForm<CategoryData>({resolver: zodResolver(schema)});

  isSubmitSuccessful && reset();

  return (
    <form className={styles.categoryForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="categoryName">Task</label>
        <input type="text" id="categoryName" placeholder="Category Name" {...register('categoryName')} />
        {errors?.categoryName && <small className={styles.error_text}>{errors.categoryName.message}</small>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default CategoryForm;