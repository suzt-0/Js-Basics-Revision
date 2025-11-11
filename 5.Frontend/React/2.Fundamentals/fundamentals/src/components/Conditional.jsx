import {useState} from "react";


export default function Conditional() {

    const [condition, setCondition] = useState(true);

    return (
        <>
        <div className="component">
            <h2>
                Conditional Rendering Component
            </h2>
            <p>
                It allows us to render different UI elements or components based on certain conditions,
                such as user authentication status, feature flags, or application state.
            </p>
            <code>{`{condition ? <TrueComponent /> : <FalseComponent />}`}</code>
            <div className="component">
                <h3>Example:</h3>
                <button onClick={() => setCondition(!condition)}>Toggle Condition</button>
                {condition ? <div>The condition is TRUE! Hence I appear!!</div> : <></>}
            </div>
        </div>
        </>
    )
}
