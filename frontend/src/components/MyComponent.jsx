// class component
// function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// use redux

import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  plusCounter,
} from "../redux/slices/Count";
const MyComponent = (props) => {
  const dispatch = useDispatch();
  const handleClickIn = () => {
    dispatch(increaseCounter());
  };
  const handleClickDe = () => {
    dispatch(decreaseCounter());
  };

  const handleClickFive = (number) => {
    dispatch(plusCounter(number));
  };
  const count = useSelector((state) => state.counter.count);
  const myNameNe = useSelector((state) => state.counter.myName);
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
      {/* <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <br />
      <DisplayInfor
        listUser={listUsers}
        handleDeleteUser={handleDeleteUser}
        // truyền hàm từ cha sang con , dùng this để thể hiện đang thao tác ở component này
      /> */}

      <span>{count}</span>
      <br />
      <span>{myNameNe}</span>
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => handleClickIn()}>
        Tăng
      </button>
      <button className="btn btn-primary" onClick={() => handleClickDe()}>
        Giảm
      </button>
      <button className="btn btn-primary" onClick={() => handleClickFive(5)}>
        Tăng 5 đơn vị
      </button>
    </div>
  );
};

export default MyComponent;
