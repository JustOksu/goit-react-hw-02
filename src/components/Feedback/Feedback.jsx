import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
      <h2>Feedback Statistics</h2>
      {total === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul>
          <li>Good: {feedback.good}</li>
          <li>Neutral: {feedback.neutral}</li>
          <li>Bad: {feedback.bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </div>
  );
};

export default Feedback;
