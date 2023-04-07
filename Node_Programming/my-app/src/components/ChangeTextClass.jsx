import React from "react";

class ChangeTextClass extends React.Component {
  constructor() {
    super();
    this.text = "its Awesome";
    console.log("com call");
  }

  render() {
    return (
      <>
        <p>{this.text}</p>
        <button>Change Text</button>
      </>
    );
  }
}

export default ChangeTextClass;
