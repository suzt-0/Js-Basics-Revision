import { useState } from "react";

export default function useStateHook() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isError, setIsError] = useState(false);
  
  //sometime its better to just combine multiple related states into one object state
  // like isSubmitted and isTyping can be combined into a single formState object
  // ie: const [status, setStatus] = useState('typing | 'submitted' | 'error | 'idle'); 
  // this can help reduce the number of state variables and make state management easier

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="component">
      <h2>Use State Hook Example</h2>
      <p>This is a simple example of using the useState hook in React.</p>
      <p className="big-number">Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <div className="component">
        <p>Form states</p>
        <p>
          There is alot of situatations that can be handled in forms, such as:
        </p>
        <ul>
          <li>Input validation</li>
          <li>Form submission</li>
          <li>Error handling</li>
          <li>Managing user input</li>
        </ul>
        <p>
          handling these situations often requires managing multiple state
          variables to keep track of the form's status and user interactions.
        </p>
        <p>
          Simple form QA will allow us to test various form scenarios easily.
        </p>
        <div className="component">
            <h2>Simple Form QA</h2>
            <p>This component demonstrates form state management using the useState hook.</p>
            <label>
              What is capital of Nepal?    
            </label>
            <input
              type="text"
              value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                    setIsTyping(true);
                }}
            />
            <button
              onClick={() => {
                if (answer.toLowerCase() === "kathmandu") {
                    setIsError(false);
                    setIsSubmitted(true);
                } else {
                    setIsError(true);
                    setIsSubmitted(false);
                }
                }}

                //disable button when the user is not typing
                disabled={!isTyping}
            >
              Submit
            </button>
            {isError && <p style={{ color: "red" }}>Incorrect answer. Please try again.</p>}
            {!isError && isSubmitted && <p style={{ color: "green" }}>Correct answer! Well done.</p>}
            {isTyping && <p>Ready to submit your answer.</p>}
            {!isTyping && <p>Please type your answer above.</p>}

            <p>
                Here we handled 4 kinds of states:
            </p>
            <ul style={{ listStyleType: "none" }}>
                <li>answer: to track the user's answer</li>
                <li>setAnswer(): to update the user's answer</li>
                <li>isError: to track if the user's answer is incorrect</li>
                <li>setIsError(): to update the error state</li>
                <li>isSubmitted: to track if the user has submitted the form</li>
                <li>setIsSubmitted(): to update the submission state</li>
                <li>isTyping: to track if the user is typing in the input field</li>
                <li>setIsTyping(): to update the typing state</li>
            </ul>
            <p>
                Each state allowed us to manage different
                aspects of the form's behavior and provide appropriate feedback to the user.
            </p>
            <p>
                By using such method we can perform various form handling tasks effectively.
            </p>
        </div>
      </div>
    </div>
  );
}
