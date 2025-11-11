export default function Sample() {
  return (
    <div className="component">
      <h2>This is a sample component</h2>
      <p>It demonstrates a simple React functional component.</p>
      <p>It's being imported via <code>import Sample from "./components/sample";</code>.</p>
      <p>Every time we export a component, we can import it in other files.</p>
      <p>The components get rendered to the DOM when used just like how this component is used in the <code>App.jsx</code> file.</p>
      <p>The main code that renders everything is given below</p>
      <p><code>document.getElementById('root').render(&lt;App/&gt;);</code></p>
      <p>This will help us use DOM to render our React components.</p>
      <p>.render() method allows us to specify which component we want to render and where.</p>
    </div>
  );
}