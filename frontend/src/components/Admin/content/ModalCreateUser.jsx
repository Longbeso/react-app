import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/appServices.jsx";
const ModalCreateUser = (props) => {
  const { showModalCreateUser, setShowModalCreateUser, fetchListUser } = props;

  const handleClose = () => {
    setShowModalCreateUser(false);
    setEmail("");
    setpassWord("");
    setuserName("");
    setImage("");
    setRole("USER");
    setPreviewImage("");
  };

  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setImage(file);
    } else {
      // setPreviewImage("");
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitCreateUser = async () => {
    // validate
    // &
    // call api

    // let data = {
    //   email: email, // value email là lấy từ state bên dưới
    //   passWord: passWord,
    //   userName: userName,
    //   role: role,
    //   userImage: image,
    // }; ==> vì có file ảnh nên không gửi một object như này lên sv được

    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("invalid email");
      return;
    }
    if (!passWord) {
      toast.error("invalid password");
      return;
    }

    // data is res from server
    let data = await postCreateNewUser(email, passWord, userName, role, image);
    if (data && data.EC === 0) {
      toast.success("create successed");
      handleClose();
      await fetchListUser();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const [userName, setuserName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        size="xl"
        show={showModalCreateUser}
        onHide={handleClose}
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
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
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
