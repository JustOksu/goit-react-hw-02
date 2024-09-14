import styles from "./Options.module.css";

const Options = ({ setFeedback, totalFeedback }) => {
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div className={styles.options}>
      <h2>Leave your feedback</h2>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button
          onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}
          className={styles.resetButton}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
