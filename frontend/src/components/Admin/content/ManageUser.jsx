import ModalCreateUser from "./ModalCreateUser";
import { useEffect, useState } from "react";
import { getAllUser, getUserWithPaginate } from "../../../services/apiServices";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModelUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const LIMIT_USER = 5;
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const handleCreateShow = () => setShowModalCreateUser(true);
  const [dataUpdate, setDataUpdate] = useState({});
  const [viewUser, SetViewUser] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const handleClickBtnUpdate = (userUpdate) => {
    setShowModalUpdateUser(true);
    setDataUpdate(userUpdate);
  };
  const handleClickBtnView = (viewData) => {
    setShowModalViewUser(true);
    SetViewUser(viewData);
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
    console.log("delete", user);
  };

  const [listUsers, setListUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // test
  const [nativePage, setNativePage] = useState(1);
  useEffect(() => {
    // const data = fetchListUser();
    fetchListUserWithPaginate(1);
  }, []);

  const fetchListUser = async () => {
    const res = await getAllUser();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  const fetchListUserWithPaginate = async (page) => {
    const res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    } else {
    }
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => handleCreateShow()}
          >
            Add new user
          </button>
        </div>
        <div className="table-user-container">
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            pageCount={pageCount}
            setNativePage={setNativePage}
            nativePage={nativePage}
          />
          <ModalCreateUser
            // fetchListUser={fetchListUser}
            showModalCreateUser={showModalCreateUser}
            setShowModalCreateUser={setShowModalCreateUser}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            nativePage={nativePage}
            setNativePage={setNativePage}
          />
          <ModalUpdateUser
            showModalUpdateUser={showModalUpdateUser}
            setShowModalUpdateUser={setShowModalUpdateUser}
            dataUpdate={dataUpdate}
            nativePage={nativePage}
            setNativePage={setNativePage}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
          />
          <ModalViewUser
            viewUser={viewUser}
            showModalViewUser={showModalViewUser}
            setShowModalViewUser={setShowModalViewUser}
          />
          <ModalDeleteUser
            showModalDeleteUser={showModalDeleteUser}
            setShowModalDeleteUser={setShowModalDeleteUser}
            dataDelete={dataDelete}
            // fetchListUser={fetchListUser}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            nativePage={nativePage}
            setNativePage={setNativePage}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
