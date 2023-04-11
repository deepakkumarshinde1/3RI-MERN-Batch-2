// stateless
// if want to add state we an do
// React Hook ==> 16.8
// Hooks
//  They are methods
//  Hooks can handel complex operation
//  in-build hooks of react
//   hooks comes with "use" pre fix
// state ==> useState

import React from "react";

let ChangeTextFunction = (props) => {
  //   let text = "Today is Tuesday";
  let [text, setText] = React.useState(props.text); // [value, stateUpdateFunction]
  let changeText = () => {
    setText("Welcome to 3 Technology");
    console.log("changeText");
  };

  return (
    <>
      {/* {<p>{text}</p>} */}
      <button onClick={changeText}>Change Text</button>
    </>
  );
};

export default ChangeTextFunction;
