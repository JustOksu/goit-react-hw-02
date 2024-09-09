import styles from "./Options.module.css";

const Options = ({ feedback, setFeedback }) => {
  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={styles.buttons}>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={styles.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
