// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // cú pháp đặc biệt của riêng react JSX ==> cho code html trong js
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <br />
        <DisplayInfor name="Leobong" age="20" />
        <DisplayInfor name="Leo" age={20} myInfor={myInfor} />
        {/* truyền trong {} cho chắc */}
      </div>
    );
  }
}
export default MyComponent;
