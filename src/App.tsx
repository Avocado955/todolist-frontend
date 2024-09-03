import './App.css'
import CategoryForm from './components/CategoryForm/CategoryForm';
import { CategoryData } from './components/CategoryForm/schema';
import { ToDoListData } from './components/ToDoListForm/schema'
import ToDoListForm from './components/ToDoListForm/ToDoListForm'

function App() {
  const dialogElement = document.getElementById('todoForm') as HTMLDialogElement;

  const onSubmit = (data: ToDoListData) => {
    console.log(data);
  }

  const handleSubmit = (data: CategoryData) => {
    console.log(data);
  }

  const openDialog = () => {
    dialogElement.showModal();
  }
  
  const closeDialog = () => {
      dialogElement.close();

  }

  return (
    <>
      

    {/* <dialog id="todoForm">
      <ToDoListForm onSubmit={onSubmit}></ToDoListForm>
      <button onClick={closeDialog}>Close</button>
    </dialog>
      <CategoryForm onSubmit={handleSubmit}></CategoryForm>
      <button onClick={openDialog}>Open Form</button> */}
    
    </>
  )
}

export default App
