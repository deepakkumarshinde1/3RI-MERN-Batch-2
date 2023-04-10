import React from "react";

class ChangeTextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      count: Number(this.props.number),
    };
  }

  changeText = (event) => {
    console.log(event);
    // this.state.text = "3ri technology's";
    // to change state data => setState()
    this.setState((state) => {
      return { ...state, text: "3ri technology's" };
    }); // state modification
  };

  changeNumber = (event) => {
    this.setState((state) => ({ ...state, count: state.count + 1 }));
  };

  render() {
    return (
      <>
        <p>{this.state.text}</p>
        <button onClick={this.changeText}>Change Text</button>
        <p>{this.state.count}</p>
        <button onClick={this.changeNumber}>Change Number</button>
      </>
    );
  }
}

export default ChangeTextClass;
