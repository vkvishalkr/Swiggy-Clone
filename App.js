import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "You are in🚀");

const Heading = () => (
  <h1 className="head" tabIndex="5">
    You are in with JSX🚀
  </h1>
);

const title = (
  <h1>This is React Element.</h1>
);

// React functional component

const HeadingComponent = () => {
  return <h1 className="heading">This is react functional component</h1>;
};

// This is also react functional component
const HeadingComponent2 = () => (
  <div id="container">
    <Heading />
    {title}
    <h1 className="heading">This is react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
