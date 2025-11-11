import { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  // useEffect has three common use cases:
  // 1. onInitialRender -> useEffect(() => {...}, [])
  // 2. onStateChange -> useEffect(() => {...}, [stateVariable])
  // 3. onEveryRender -> useEffect(() => {...})

  // 1. onInitialRender
  useEffect(() => {
    console.log("Component mounted (Initial Render)");
  }, []);

  // 2. onStateChange
  useEffect(() => {
    console.log(`Count state changed: ${count}`);
  }, [count]);

  // 3. onEveryRender
  useEffect(() => {
    console.log("Component rendered (Every Render)");
  });

  //-------------------------------------------------------------------------------------
  // Practical Example: Fetching data from an API on component mount
  // using useEffect to fetch data when the component mounts allows us to
  // perform side effects such as data fetching

  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, fetching, fetched, error
  const fetchData = async () => {
    try {
      setStatus("fetching");
      const response = await fetch(
        " https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      setData(data);
      setStatus("fetched");
    } catch (error) {
      console.error("Error fetching data:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchData();

    /*
    // Cleanup function example (not needed in this case)
    return () => {
      // Any necessary cleanup can be done here
      console.log("Cleanup on component unmount");
    };
    */
  }, []);

  // this will run in inital render only
  // this will allow us to fetch data when the component mounts
  // the memory cleanup can be done here if needed
  // but here particular example does not need cleanup
  // but IF we were to need some cleanup we could return a function from useEffect
  // like this:
  /* 
    useEffect(() => {
       // setup code here
       return () => {
         // cleanup code here
       };
     }, []); 

  */

  return (
    <>
      <div className="component">
        <h2>UseEffect Hook Examples</h2>
        <div className="component">
          Simple demonstration of useEffect hook in React.
          <p>Count: {count}</p>
          <p>
            Look at console to see what happens when you change the state ie
            count value
          </p>
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
          <p>
            While we have shown the useEffect hook example like this its not
            necessary to use useEffect in this manner.
          </p>
          <p>
            In fact, it is discouraged to use useEffect for every little state
            change or render.
          </p>
          <p>
            UseEffect's best usecase is to manage side effects not creating side
            effects.
          </p>
          <p>
            It is a general use in useEffect's case to use it when communicating
            with external systems (APIs, subscriptions, etc.).
          </p>
          <p>Always clean up after effects to avoid memory leaks.</p>
          <p>
            Example: Returning a cleanup function from useEffect.{" "}
            <code>{`useEffect(() => { return () => { /* cleanup code */ } }, [dependencies])`}</code>
          </p>
        </div>
        <div className="component">
          <h3>A example on using the useEffect to fetch data from an API</h3>
          <p>
            Status: {status}
            {status === "fetched" && (
              <div>
                <h4>Fetched Data:</h4>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}
          </p>
          <p>
            Here, we use useEffect to fetch data from an API when the component
            mounts. The fetched data is stored in the state and displayed once
            available.
          </p>
          <p>Though its not the best approach it can be done like this.</p>
          <p>
            A better implementation of useEffect can be to handle state changes
            more effectively.
          </p>
          <p>
            Like: if the state changes to "fetched", we can trigger a effect to do something else. 
          </p>
            <code><b>Example: </b>{`useEffect(() => { if (status === "fetched") { /* do something */ } }, [status])`}</code>
          <p>OR we can use it to fetch data automatically when the component mounts.</p>
          <code><b>Example: </b>{`useEffect(() => { fetchData(); }, [])`}</code>
        </div>
      </div>
    </>
  );
}
