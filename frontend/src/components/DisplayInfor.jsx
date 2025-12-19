import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "../assets/react.svg"; // <img src={logo} /> cách nhúng trực tiếp ảnh vào
// class DisplayInfor extends React.Component {
//   // dùng để xử lý sau khi render ra DOM , gọi api lên dữ liệu cho web lần đầu các kiểu

//   // stateless là không có state, statefull là có state, cách viết khi viết react class
//   // nếu không có state thì ta có thể viết nó dưới dạng một function
//   render() {
//     // use destructoring
//     console.log(">> call by render");
//     const { listUser } = this.props;

//     return (
//       <div className="display-infor-container">
//         {true &&
//           listUser.map((user) => {
//             return (
//               <React.Fragment key={user.id}>
//                 <div
//                   className={
//                     (user.age > 18 ? "redColor" : "blueColor") + " list-item"
//                   }
//                 >
//                   <div>
//                     <div>Name: {user.name}</div>
//                     <div>age: {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//                 <hr />
//               </React.Fragment>
//             );
//           })}
//       </div>
//     );
//   }
// }

// biến props nó sẽ tự truyền vào
const DisplayInfor = (props) => {
  const { listUser } = props;
  // [<tên biến state cần>, <hàm để update biến state>] = useState(<giá trị khởi tạo>);
  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  const handleShowHide = (e) => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  // chạy sau khi render ra DOM
  useEffect(() => {
    if (listUser.length === 0) {
      alert("you got 0 member");
    }
    console.log("this is useEffect");
  }, [listUser]);
  // có thể viết nhiều hàm useEffect
  // nếu [listUser] ==> mỗi lần listUser thay đổi ==> gọi lại hàm này
  // có giá trị khởi tạo [] ==> chỉ chạy 1 lần

  console.log(">>> call by render ");

  return (
    <div className="display-infor-container">
      <div>
        <button onClick={handleShowHide}>
          {isShowHideListUsers ? "Hide" : "Show"} {" list users"}
        </button>
      </div>
      {isShowHideListUsers &&
        listUser.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <div
                className={
                  (user.age > 18 ? "redColor" : "blueColor") + " list-item"
                }
              >
                <div>
                  <div>Name: {user.name}</div>
                  <div>age: {user.age}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default DisplayInfor;
