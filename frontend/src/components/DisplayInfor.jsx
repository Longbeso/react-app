import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // use destructoring
    const { age, name } = this.props;
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age's {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
