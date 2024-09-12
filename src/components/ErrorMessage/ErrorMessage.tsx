import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  error: Error[];
}

const ErrorMessage = ({error}: ErrorMessageProps) => {

  console.log("It called the Error Message Component");

  return (
    <div className={styles.errorMessage}>
      {error.map(e => <h3>{e.message}</h3>)}
    </div>
  )
}
export default ErrorMessage