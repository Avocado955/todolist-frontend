import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  error: Error;
}

const ErrorMessage = ({error}: ErrorMessageProps) => {

  console.log("It called the Error Message Component");

  return (
    <div className={styles.errorMessage}>
      <h3>{error.message}</h3>
    </div>
  )
}
export default ErrorMessage