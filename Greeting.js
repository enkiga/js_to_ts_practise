import React from "react";
// Step 2: Annotate component with React.FC type and specify props interface
const Greeting = ({ name }) => {
    return React.createElement("div", null,
        "Hello, ",
        name,
        "!");
};
export default Greeting;
