import React from 'react';

export default function PropExample(props) {
  return (
    <div className="component">
      <h2>This is a prop example component</h2>
      <p>Received prop: {props.name}</p>
    </div>
  );
}
//use the prop name to display its value inside a paragraph