export default function EventManagement() {
  // ususally event handlers are defined here
  // like:
  const handleClick = () => {
    //toggle background color on button click
    let bg = document.body.style.backgroundColor;
    document.body.style.backgroundColor =
      bg === "lightgreen" ? "" : "lightgreen";
  };

  const handleMouseEnter = () => {
    // change background color on hover
    document.body.style.backgroundColor = "lightblue";
  };

  const handleMouseLeave = () => {
    // revert background color when not hovering
    document.body.style.backgroundColor = "";
  };

  const onSimpleFormSubmit = (e) => {
    e.preventDefault();
    // display the data in the alert
    let data = e.target[0].value;
    alert(`Form submitted with data: ${data}`);
  };

  const formWithPincodeSubmit = (e) => {
    e.preventDefault();
    let pincode = e.target[1].value;
    let data = e.target[0].value;
    // check if pincode is '123456'
    if (pincode === "123456") {
      alert("Pincode verified successfully! and sent " + data);
      //   also allow form submission to proceed
    } else {
      alert("Invalid Pincode. Please try again.");
      // prevent form submission
    }
  };

  const handleNestedClick = (e) => {
    alert("Nested Div Clicked: " + e.currentTarget.id);
    // e.stopPropagation(); // to prevent event bubbling
  }

  return (
    <>
      {/* Simple Events */}
      <div className="component">
        <h2>Simple Events like button clicks and hover</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hover Me
        </button>
        <p>Click the button to see an alert.</p>
      </div>
      {/* Form Events */}
      <div className="component">
        <h2>Form Events</h2>
        <form onSubmit={onSimpleFormSubmit}>
          <h3>Simple Form</h3>
          <input type="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>
        <p>
          This will come in handy when you try to do something before submitting
          the form.
        </p>
        <p>
          Like: Validation, confirmation dialogs, verification messages like
          pincode, etc.
        </p>
        <p>
          It will help us in displaying success messages before processing it.
        </p>

        {/* Example of using pincode to be submitted */}
        <div className="component">
          <h3>Form with Pincode Verification</h3>
          <form onSubmit={formWithPincodeSubmit}>
            <div>
              <input type="text" name="value" placeholder="Enter value" />
            </div>
            <div>
              <input type="text" name="pincode" placeholder="Enter Pincode" />
            </div>

            <button type="submit">Submit</button>
            <p>Enter '123456' as pincode to verify successfully.</p>
          </form>
        </div>
      </div>
      {/* Nested Events */}
      <div className="component">
        <h3>Nested Events</h3>
        <div id="parent-div" className="component" onClick={handleNestedClick}>
          <p>
            I am an Outer div or Parent Div that has an event associated with it
          </p>

          <div id="child-div" className="component" onClick={handleNestedClick}>
            <p>
              I am an Inner div or Child Div that has an event associated with
              it
            </p>
            <p>
            See how clicking me triggers both my event and my parent's event
            resulting in two alerts. This is called Event Bubbling.
            </p>

            <p>
            To prevent this, we can use e.stopPropagation() in the child event handler.
            That prevents the event from bubbling up to parent elements.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

// This component demonstrates handling events in React
// Here, we have a button that shows an alert when clicked
// The onClick event is used to handle the button click event

//Syntax for event handling in React:
// <element eventName={eventHandlerFunction}>...</element>

// Common events in React:
// onClick, onChange, onSubmit, onMouseEnter, onMouseLeave, onKeyDown, etc.

// Event handler functions can be defined inside the component
// or passed as props from parent components
// Event handlers in React use camelCase naming convention
// Unlike HTML, React event handlers are passed as functions, not strings
