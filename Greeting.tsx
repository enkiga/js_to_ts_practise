import React from "react";

// Step 1: Define interface for component props
interface GreetingProps {
  name: string; // Explicitly type the 'name' prop as string
}

// Step 2: Annotate component with React.FC type and specify props interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
