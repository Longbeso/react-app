import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiServices.jsx";
import _ from "lodash"; // thư viện
const ModalViewUser = (props) => {
  const { showModalViewUser, setShowModalViewUser, viewUser } = props;

  const handleClose = () => {
    setShowModalViewUser(false);
  };

  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setImage(file);
    } else {
      console.log("nothing");
    }
  };

  const handleSubmitUpdateUser = async () => {
    let data = await putUpdateUser(dataUpdate?.id, userName, role, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await fetchListUser();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      console.log(data.EM);
    }
  };
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const [userName, setuserName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");

  return (
    <>
      <Modal
        size=""
        show={showModalViewUser}
        onHide={handleClose}
        backdrop="static"
        className="modal-view-user"
      >
        <Modal.Header>
          <Modal.Title>View User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <div className="container">
              <div className="row g-3">
                <div className="col col-12 col-md-12 img-view-container">
                  <div className={!viewUser.image ? "img-preview" : ""}>
                    {viewUser.image ? (
                      <img
                        className="img-view"
                        src={`data:image/png;base64,${viewUser.image}`}
                        alt="img"
                      />
                    ) : (
                      <span>Preview Image</span>
                    )}
                  </div>
                </div>
                <div className="col col-12 col-md-12 view-element">
                  <label className="form-label">Email:</label>
                  <div>{viewUser.email}</div>
                </div>

                <div className="col col-12 col-md-12 view-element">
                  <label className="form-label">User Name:</label>
                  <div>{viewUser.username}</div>
                </div>
                <div className="col col-12 col-md-12 view-element">
                  <label className="form-label">Role:</label>
                  <div>{viewUser.role}</div>
                </div>
              </div>
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;
