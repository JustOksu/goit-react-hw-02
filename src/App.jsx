import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <Feedback feedback={feedback} />
      <Options setFeedback={setFeedback} totalFeedback={totalFeedback} />
    </div>
  );
};

export default App;
