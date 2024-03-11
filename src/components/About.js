import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor called");
  }

  componentDidMount() {

  }

  render() {
    // console.log("Parent render CAllled");
    return (
      <div>
        <h1>This is About component</h1>
        <h2>This is food ordering app</h2>
        <UserClass />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is About component</h1>
//       <h2>This is food ordering app</h2>
//       <User
//         name={"Vishal Kumar (Function)"}
//         location={"Bengaluru (Function)"}
//       />
//       <UserClass name={"Vishal Kumar (class)"} location={"Bengaluru (class)"} />
//     </div>
//   );
// };

export default About;
