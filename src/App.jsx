import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Feedback feedback={feedback} />
      <Options feedback={feedback} setFeedback={setFeedback} />
    </div>
  );
};

export default App;
