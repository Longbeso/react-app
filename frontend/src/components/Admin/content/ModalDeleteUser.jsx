import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

import { deleteUser } from "../../../services/apiServices";
const ModalDeleteUser = (props) => {
  const {
    showModalDeleteUser,
    handleClickBtnDelete,
    setShowModalDeleteUser,
    dataDelete,
    fetchListUserWithPaginate,
    nativePage,
    setNativePage,
  } = props;
  const handleClose = () => {
    setShowModalDeleteUser(false);
  };
  const handleSubmitDelete = async () => {
    // data is res from server
    let data = await deleteUser(dataDelete.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      setNativePage(1);
      await fetchListUserWithPaginate(1);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal
        size="lg"
        show={showModalDeleteUser}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete the user?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure delete this user, email{" "}
          {
            <b>
              {dataDelete && dataDelete.email ? dataDelete.email : "not found"}
            </b>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDelete();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
