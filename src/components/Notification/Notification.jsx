import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={styles.notification}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
