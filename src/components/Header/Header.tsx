import styles from "./Header.module.scss";

interface HeaderProps {
  onAddToDoClick: () => unknown;
  onAddCategoryClick: () => unknown;
}

const Header = ({onAddToDoClick, onAddCategoryClick}: HeaderProps) => {
  const addToDo = () => {
    onAddToDoClick();
  }

  const addCategory = () => {
    onAddCategoryClick();
  }

  return (
    <div className={styles.banner}>
      <h1 className={styles.heading}>To-Do List</h1>
      <div className={styles.banner_buttonsArea}>
        <button className={styles.btn} onClick={addToDo}>Add To-Do</button>
        <button className={styles.btn} onClick={addCategory}>Add Category</button>
      </div>
    </div>
  )
}
export default Header