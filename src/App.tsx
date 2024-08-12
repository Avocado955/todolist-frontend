import './App.css'
import { ToDoListData } from './components/ToDoListForm/schema'
import ToDoListForm from './components/ToDoListForm/ToDoListForm'

function App() {
  const onSubmit = (data: ToDoListData) => {
    console.log(data);
  }

  return (
    <>
      <ToDoListForm onSubmit={onSubmit}></ToDoListForm>
    </>
  )
}

export default App
