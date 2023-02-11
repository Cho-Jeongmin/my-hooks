import React, { useState, useEffect } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  incrementItem = () => {
    this.setState((current) => {
      return { item: current.item + 1 };
    });
  };
  decrementItem = () => {
    this.setState((current) => {
      return { item: current.item - 1 };
    });
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
}

export default App;
