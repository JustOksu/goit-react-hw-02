const Options = ({ setFeedback }) => {
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
    </div>
  );
};

export default Options;
