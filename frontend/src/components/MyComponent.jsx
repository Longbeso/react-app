// class component
// function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Leo Bóng", age: 17 },
    { id: 2, name: "Leo B", age: 20 },
    { id: 3, name: "Leo", age: 21 },
  ]);

  // thêm user
  const handleAddNewUser = (objUser) => {
    setListUsers([{ id: listUsers.length + 1, ...objUser }, ...listUsers]);
  };

  // xóa user
  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUsers];
    setListUsers(
      listUserClone.filter((user) => {
        return user.id !== userId;
      })
    );
  };
  return (
    <div>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <br />
      <DisplayInfor
        listUser={listUsers}
        handleDeleteUser={handleDeleteUser}
        // truyền hàm từ cha sang con , dùng this để thể hiện đang thao tác ở component này
      />
    </div>
  );
};

export default MyComponent;
