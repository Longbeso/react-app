import ModalCreateUser from "./ModalCreateUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/appServices";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModelUpdateUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const handleCreateShow = () => setShowModalCreateUser(true);
  const [dataUpdate, setDataUpdate] = useState({});
  const handleClickBtnUpdate = (userUpdate) => {
    setShowModalUpdateUser(true);
    setDataUpdate(userUpdate);
  };

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const data = fetchListUser();
  }, []);

  const fetchListUser = async () => {
    const res = await getAllUser();
    if (res.EC === 0) {
      setListUsers(res.DT);
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
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
          <ModalCreateUser
            fetchListUser={fetchListUser}
            showModalCreateUser={showModalCreateUser}
            setShowModalCreateUser={setShowModalCreateUser}
          />
          <ModalUpdateUser
            showModalUpdateUser={showModalUpdateUser}
            setShowModalUpdateUser={setShowModalUpdateUser}
            dataUpdate={dataUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
