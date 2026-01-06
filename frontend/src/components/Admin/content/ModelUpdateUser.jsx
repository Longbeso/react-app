import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiServices.jsx";
import _ from "lodash"; // thư viện
const ModalUpdateUser = (props) => {
  const {
    showModalUpdateUser,
    setShowModalUpdateUser,
    dataUpdate,
    fetchListUserWithPaginate,

    nativePage,
  } = props;

  const handleClose = () => {
    setShowModalUpdateUser(false);
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

      await fetchListUserWithPaginate(nativePage);
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
  const [previewImage, setPreviewImage] = useState("");
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      // update State
      setEmail(dataUpdate.email);
      setuserName(dataUpdate.username);
      setRole(dataUpdate.role);
      setPreviewImage(
        dataUpdate.image ? `data:image/png;base64,${dataUpdate.image}` : ""
      );
    }
  }, [dataUpdate]);
  return (
    <>
      <Modal
        size="xl"
        show={showModalUpdateUser}
        onHide={handleClose}
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  disabled
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control passWord-show-hide"
                  value={passWord}
                  disabled
                  onChange={(e) => {
                    setpassWord(e.target.value);
                  }}
                />
                <span
                  onClick={(e) => {
                    document.querySelector(".passWord-show-hide").type =
                      document.querySelector(".passWord-show-hide").type ===
                      "password"
                        ? "text"
                        : "password";
                  }}
                >
                  icon
                </span>
              </div>

              <div className="col-md-6">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={userName}
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Role</label>
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option default value="USER">
                    USER
                  </option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>
              <div className="col-md-12">
                <label
                  className="form-label label-upload"
                  htmlFor="labelUpload"
                >
                  <CiCirclePlus /> upload File Image
                </label>
                <input
                  type="file"
                  id="labelUpload"
                  hidden
                  onChange={(e) => handleUploadImage(e)}
                />
              </div>
              <div className="col-md-12 img-preview">
                {previewImage ? (
                  <img src={previewImage} alt="img" />
                ) : (
                  <span>Preview Image</span>
                )}
              </div>
            </form>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
