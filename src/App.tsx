import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import CategoryForm from './components/CategoryForm/CategoryForm';
import { CategoryData } from './components/CategoryForm/schema';
import Header from "./components/Header/Header";
import { ToDoListData } from './components/ToDoListForm/schema'
import ToDoListForm from './components/ToDoListForm/ToDoListForm'
import CardDisplay from "./containers/CardDisplay/CardDisplay";
import { createToDo, getAllToDos, ToDoListResponse } from "./services/todoservices";

function App() {
  const [todos, setToDos] = useState<ToDoListResponse[]>([]);
  const [todoDialog, setTodoDialog] = useState<HTMLDialogElement | null>(null);
  const [categoryDialog, setCategoryDialog] = useState<HTMLDialogElement | null>(null);

  useEffect(() => {
    const foundTodoDialog = document.getElementById('todoForm') as HTMLDialogElement;
    setTodoDialog(foundTodoDialog);

    const foundCategoryDialog = document.getElementById('categoryForm') as HTMLDialogElement;
    setCategoryDialog(foundCategoryDialog);

    getAllToDos().then(data => setToDos(data)).catch(e => console.log(e));
  }, [])

  const onToDoSubmit = async (data: ToDoListData) => {
    console.log(data);
    createToDo(data).then(newToDo => setToDos([...todos, newToDo])).catch(e => console.log(e));
  }

  const onCategorySubmit = (data: CategoryData) => {
    console.log(data);
  }

  const openTodoDialog = () => {
    if (todoDialog?.open) {
      todoDialog?.close();
    } else {
      todoDialog?.showModal();
    }
  }

  const openCategoryDialog = () => {
    if (categoryDialog?.open) {
      categoryDialog?.close();
    } else {
      categoryDialog?.showModal();
    }
  }
  
  const closeTodoDialog = () => {
    todoDialog?.close();
  }
  
  const closeCategoryDialog = () => {
    categoryDialog?.close();
  }

  return (
    <div className={styles.app}>
      <Header onAddToDoClick={openTodoDialog} onAddCategoryClick={openCategoryDialog}/>
      {todos && <CardDisplay todos={todos} />}

    <dialog id="todoForm" className={styles.modal} >
      <ToDoListForm onSubmit={onToDoSubmit}></ToDoListForm>
      <button className={styles.modal_close} onClick={closeTodoDialog}>X</button>
    </dialog>
    <dialog id="categoryForm" className={styles.modal}>
      <CategoryForm onSubmit={onCategorySubmit}></CategoryForm>
      <button className={styles.modal_close} onClick={closeCategoryDialog}>X</button>
    </dialog>
    
    </div>
  )
}

export default App
