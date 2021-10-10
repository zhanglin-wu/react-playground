class App extends React.Component {
  render() {
    const element = React.createElement("h1", null, "Hello World!");
    console.log(Object.isFrozen(element));

    return element;
  }
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
