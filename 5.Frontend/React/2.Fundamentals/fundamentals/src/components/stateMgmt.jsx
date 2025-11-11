import { useState } from "react";
export default function StateMgmt() {
    const [count, setCount] = useState(0);

    return (
        <>
        <h2>State Management</h2>
        <p>State management is crucial in React applications.</p>
        <p>It allows us to manage and share state across components effectively.</p>
        <p>Common state management solutions include:</p>
        <ul>
            <li>React's built-in state management (useState, useReducer)</li>
            <li>Context API for global state management</li>
            <li>External libraries like Redux, MobX, Zustand, etc.</li>
        </ul>

        <p>Well there is also something called useEffect but that's for managing side effects in functional components. </p>
        <p>Side effects really refer to any operation that can affect other components or the outside world, such as data fetching, subscriptions, or manually changing the DOM.</p>

        <div className="component">
            <h2>Simple state management: Counter</h2>
            <p>This component demonstrates simple state management using the useState hook.</p>
            <p className="big-number">Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <p>State in this state management is just some variables that hold values.</p>
            <p>When the state changes, the component re-renders to reflect the new state. ie it updates the UI to match the current change in the values.</p>
            <p>In this case, the count variable is part of the component's state.</p>
            <p>When ever we change the count variable using setCount, the component re-renders with the new count value.</p>
            <p>This is the essence of state management in React: keeping track of variables that affect the UI and updating the UI when those variables change.</p>

            <p>The one that changes the value is the setCount function in our case.</p>
            <p>It takes the new value as an argument and updates the state accordingly.</p>
            <p>It is what we call a state updater function.</p>

            <p>Now about Hooks:</p>
            <p>Hooks are simply a special type of function that lets you "hook into" React features.</p>
            <p>The most common hooks are useState and useEffect.</p>
            </div>
        </>
    );
}