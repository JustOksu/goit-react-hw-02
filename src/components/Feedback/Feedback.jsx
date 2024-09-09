import styles from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={styles.feedback}>
      <h2>Feedback Statistics</h2>
      {totalFeedback === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul>
          <li>Good: {feedback.good}</li>
          <li>Neutral: {feedback.neutral}</li>
          <li>Bad: {feedback.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedbackPercentage}%</li>
        </ul>
      )}
    </div>
  );
};

export default Feedback;
