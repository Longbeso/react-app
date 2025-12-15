// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  // cú pháp đặc biệt của riêng react JSX ==> cho code html trong js
  render() {
    return (
      <div>
        my first component
        {Math.PI}
        {/* viết được js */}
      </div>
    );
  }
}
export default MyComponent;
