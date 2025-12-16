import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Leo",
    adress: "Leo123",
    age: 19,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  changeName = (e) => {
    this.setState({ name: e?.target?.value });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.adress} and i'm{" "}
        {this.state.age} years old{" "}
        <form action="" onSubmit={this.handleSubmit}>
          <input
            value={this.state.name}
            type="text"
            onChange={this.changeName}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
