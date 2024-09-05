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
  const [dialogElement, setDialogElement] = useState<HTMLDialogElement | null>(null);

  useEffect(() => {
    const foundDialogElement = document.getElementById('todoForm') as HTMLDialogElement;
    setDialogElement(foundDialogElement);

    getAllToDos().then(data => setToDos(data)).catch(e => console.log(e));
  }, [])

  const onToDoSubmit = async (data: ToDoListData) => {
    console.log(data);
    createToDo(data).then(newToDo => setToDos([...todos, newToDo])).catch(e => console.log(e));
  }

  const onCategorySubmit = (data: CategoryData) => {
    console.log(data);
  }

  const openDialog = () => {
    if (dialogElement?.open) {
      dialogElement?.close();
    } else {
      dialogElement?.showModal();
    }
  }
  
  const closeDialog = () => {
    dialogElement?.close();
  }

  return (
    <div className={styles.app}>
      <Header onAddToDoClick={openDialog}/>
      {todos && <CardDisplay todos={todos} />}

    <dialog id="todoForm" className={styles.modal} >
      <ToDoListForm onSubmit={onToDoSubmit}></ToDoListForm>
      <button className={styles.modal_close} onClick={closeDialog}>X</button>
    </dialog>
    <dialog>
      {/* <CategoryForm onSubmit={onCategorySubmit}></CategoryForm> */}
    </dialog>
    
    </div>
  )
}

export default App
