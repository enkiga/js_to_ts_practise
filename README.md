# React TypeScript Conversion Checkpoint

This repository demonstrates the conversion of two React components from JavaScript to TypeScript.

## Overview

This project was created as a checkpoint to demonstrate proficiency in:

* Converting React functional components to TypeScript.
* Converting React class components to TypeScript.
* Defining TypeScript interfaces for component props.
* Typing component state.
* Using TypeScript with React event handlers.

## Functionality

The project includes two React components:

* `Greeting`: A functional component that displays a greeting message.
* `Counter`: A class component that displays a counter and increments it when a button is clicked.

Both components are converted from their original JavaScript versions to TypeScript.

## Technologies Used

* TypeScript
* React

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/enkiga/js_to_ts_practise
    ```

2. **Navigate to the project directory:**

    ```bash
    cd js_to_ts_practise
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

## File Structure

* `Greeting.tsx`: TypeScript version of the `Greeting` component.
* `Counter.tsx`: TypeScript version of the `Counter` component.
* `README.md`: This file.
* `tsconfig.json`: TypeScript configuration file.

## Conversion Steps and Code

### Greeting.tsx

```typescript
import React from 'react';

// 1. Define the props interface
interface GreetingProps {
  name: string;
}

// 2. Type the functional component with the defined props interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

### Counter.tsx

```tsx
import React, { Component } from 'react';

// 1. Define the state interface
interface CounterState {
  count: number;
}

// 2. Type the class component with the defined state interface
class Counter extends Component<{}, CounterState> {
  // 3. Initialize the state with the defined state interface
  state: CounterState = {
    count: 0,
  };

  // 4. Type the increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
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
```

## Explanation of Steps

### Define Interfaces

* For the `Greeting` component, an interface `GreetingProps` is created to define the type of the `name` prop.

* For the `Counter` component, an interface `CounterState` is created to define the type of the `count` state.

### Type the Component

* The Greeting functional component is typed using ```React.FC<GreetingProps>```, which specifies that it's a React functional component that accepts ```GreetingProps```.
* The Counter class component is typed using ```Component<{}, CounterState>```, specifying it has no props and the defined state.

### Type the State

* The state of the `Counter` component is initialized with the type `CounterState`.

### Type the Increment Function

* The increment function is typed implicitly, since TypeScript can infer the type.

## Usage

After starting the application, you will see both the `Greeting` and `Counter` components rendered on the screen. The `Counter` component's button will increment the displayed count.
