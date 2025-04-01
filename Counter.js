import React, { Component } from "react";
// Step 2: Extend Component with state type declaration
class Counter extends Component {
    constructor() {
        super(...arguments);
        // Step 3: Initialize state with type annotation
        this.state = {
            count: 0,
        };
        // Step 4: Type the class method with explicit return type
        this.increment = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null,
                "Count: ",
                this.state.count),
            React.createElement("button", { onClick: this.increment }, "Increment")));
    }
}
export default Counter;
