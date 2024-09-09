import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import styles from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
