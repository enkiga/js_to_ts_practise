import React, { Component } from "react";

// Step 1: Define interface for component state
interface CounterState {
  count: number; // Explicitly type the count as number
}

// Step 2: Extend Component with state type declaration
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize state with type annotation
  state: CounterState = {
    count: 0,
  };

  // Step 4: Type the class method with explicit return type
  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
