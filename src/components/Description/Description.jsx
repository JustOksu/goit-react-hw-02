import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <h2>Welcome to Sip Happens Café!</h2>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <p>
        We value your feedback and use it to improve our service. You can
        provide a good, neutral, or bad review. You can also reset the feedback
        at any time.
      </p>
    </div>
  );
};

export default Description;
