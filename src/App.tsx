import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { ToDoListData } from './components/ToDoListForm/schema'
import ToDoListForm from './components/ToDoListForm/ToDoListForm'
import CardDisplay from "./containers/CardDisplay/CardDisplay";
import { createToDo, getAllToDos, ToDoListResponse } from "./services/todoservices";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import CategoryManager from "./containers/CategoryManager/CategoryManager";

function App() {
  const [error, setError] = useState<Error>();
  const [todos, setToDos] = useState<ToDoListResponse[]>([]);
  const [todoDialog, setTodoDialog] = useState<HTMLDialogElement | null>(null);
  const [categoryDialog, setCategoryDialog] = useState<HTMLDialogElement | null>(null);

  useEffect(() => {
    const foundTodoDialog = document.getElementById('todoForm') as HTMLDialogElement;
    setTodoDialog(foundTodoDialog);

    const foundCategoryDialog = document.getElementById('categoryForm') as HTMLDialogElement;
    setCategoryDialog(foundCategoryDialog);

    getAllToDos().then(data => setToDos(data)).catch(e => {
      console.log(e);
      updateError(e);
    });
  }, [])

  const onToDoSubmit = async (data: ToDoListData) => {
    console.log(data);
    createToDo(data).then(newToDo => setToDos([...todos, newToDo])).catch(e => {
      console.log(e);
      updateError(e);
    });
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

  const updateError = (error: Error) => {
    let newError = new Error;
    if (error.message == "NetworkError when attempting to fetch resource.") {
      newError.message = "Network Error when attempting to fetch resource. Is the Backend running?";
    } else {
      newError = error;
    }
    setError(newError);
  }

  console.log("Did it update? " + error);

  return (
    <div className={styles.app}>
      <Header onAddToDoClick={openTodoDialog} onAddCategoryClick={openCategoryDialog}/>
      {error && <ErrorMessage error={error} /> }
      {todos && <CardDisplay todos={todos} />}

      <dialog id="todoForm" className={styles.modal} >
        <ToDoListForm onSubmit={onToDoSubmit} mode="ADD"></ToDoListForm>
        <button className={styles.modal_close} onClick={closeTodoDialog}>X</button>
      </dialog>
      <dialog id="categoryForm" className={styles.modal}>
        <CategoryManager />
        <button className={styles.modal_close} onClick={closeCategoryDialog}>X</button>
      </dialog>
    
    </div>
  )
}

export default App
