import { useState, useReducer } from "react";

export default function UseReducerHook() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  // for form state management example
  const initialFormState = {
    username: "",
    email: "",
  };
  function formReducer(state, action) {
    switch (action.type) {
      case "SET_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "RESET":
        return initialFormState;
      default:
        return state;
    }
  }
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  const handleInputChange = (e) => {
    formDispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formState.username}, Email: ${formState.email}`);
    formDispatch({ type: "RESET" });
  };

  return (
    <>
      <h2>Use Reducer Hook Example</h2>
      <p>This is a simple example of using the useReducer hook in React.</p>
      <div className="component">
        <h2>Simple Counter using useReducer</h2>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <p>
          The useReducer hook is used for managing more complex state logic in
          React components.
        </p>
        <p>
          It is an alternative to the useState hook and is particularly useful
          when the state logic involves multiple sub-values or when the next
          state depends on the previous one.
        </p>
        <p>
          In this example, we have a simple counter that can be incremented or
          decremented using buttons.
        </p>
        <p>
          The reducer function takes the current state and an action as
          arguments and returns the new state based on the action type.
        </p>
      </div>
      <div className="component">
        <h2>Form state management using useReducer</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
