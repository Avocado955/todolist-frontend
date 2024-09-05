import styles from "./App.module.scss";
import CategoryForm from './components/CategoryForm/CategoryForm';
import { CategoryData } from './components/CategoryForm/schema';
import Heading from "./components/Heading/Heading";
import { ToDoListData } from './components/ToDoListForm/schema'
import ToDoListForm from './components/ToDoListForm/ToDoListForm'
import CardDisplay from "./containers/CardDisplay/CardDisplay";

function App() {
  const dialogElement = document.getElementById('todoForm') as HTMLDialogElement;
  // might need to have a useEffect to ensure the dialog renders before trying to set it
  console.log(dialogElement);
  console.log(document.getElementById('todoForm'));

  const onSubmit = (data: ToDoListData) => {
    console.log(data);
  }

  const handleSubmit = (data: CategoryData) => {
    console.log(data);
  }

  const openDialog = () => {
    console.log(dialogElement);
    dialogElement.showModal();
  }
  
  const closeDialog = () => {
      dialogElement.close();

  }

  return (
    <div className={styles.app}>
      <Heading />
      <CardDisplay />

    {/* <dialog id="todoForm" >
      <ToDoListForm onSubmit={onSubmit}></ToDoListForm>
      <button onClick={closeDialog}>Close</button>
    </dialog>
      <CategoryForm onSubmit={handleSubmit}></CategoryForm>
      <button onClick={openDialog}>Open Form</button> */}
    
    </div>
  )
}

export default App
