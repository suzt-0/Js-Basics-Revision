import { useState, useReducer } from "react"; // import react as it will be used in jsx
import "./App.css"; // import css file for styling can remove this to remove default styling
import Sample from "./components/sample";
import PropExample from "./components/propExample";
import EventManagement from "./components/eventManagement";
import StateMgmt from "./components/stateMgmt";
import UseStateHook from "./components/useStateHook";
import UseReducerHook from "./components/useReducerHook";
import UseEffectHook from "./components/useEffectHook";
import Conditional from "./components/Conditional";
import List from "./components/List";

function App() {
  // can also be written as -> export default function App() {...}

  // here we are returning jsx code for the component that calls this function/Component as <App /> in main.jsx file

  return (
    <>
      <div className="component">
        <h1>Welcome to React fundamentals</h1>
        <p>This is a simple React application.</p>
      </div>

      {/* Component that shows component rendering basics */}
      <Sample />
      {/* --------------------------------------------------------------------------------------------- */}

      {/* Component that shows conditional rendering */}
      <div className="component">
        <Conditional />
      </div>

      {/* --------------------------------------------------------------------------------------------- */}

      {/* List and Keys */}
      <div className="component">
        <List/>
      </div>
 
      {/* --------------------------------------------------------------------------------------------- */}
      {/* Component that shows prop usage */}
      <div className="component">
        <h2>Prop Example Component Instances</h2>
        <PropExample name="React Prop-1" />
        <PropExample name="React Prop-2" />
        <PropExample name="React Prop-3" />
        <div>
          We can create multiple instances of the same component with different
          props.
          <br />
          This allows us to make the code reusable and modular.
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/*Handling events in React*/}
      <div className="component">
        <h2>Event Management Component here:</h2>
        <EventManagement />
      </div>
      {/* This component demonstrates handling events in React. This allows us to create interactive UIs.*/}

      {/* --------------------------------------------------------------------------------------------- */}
      {/* Managing State with UseState Hook */}
      <div className="component">
        <h2>State Management Component here:</h2>
        <StateMgmt />
      </div>
      {/* ---------------------------------------------------------------- */}
      {/* Use State Hook */}
      <div className="component">
        <h2>Use State Hook Example</h2>
        <p>This is a simple example of using the useState hook in React.</p>
        <UseStateHook />
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="component">
        <UseReducerHook />
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="component">
        <UseEffectHook />
      </div>
      {}
    </>
  );
}

export default App;
// it allows other files to import this component like in main.jsx file
// where it is imported and rendered to the DOM
