import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.heading}>To-Do List</h1>
    </div>
  )
}
export default Header