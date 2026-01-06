import { useState } from "react";
import "./Login.scss";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast, ToastContainer } from "react-toastify";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [showPassWord, setShowPassWord] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleRegister = async () => {
    // validate
    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("invalid email");
      return;
    }
    if (!passWord) {
      toast.error("invalid password");
      return;
    }
    // submit apis

    let data = await postRegister(email, userName, passWord);
    console.log("this is register, ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span></span> Don't have an account yet?
        <button
          className="btn  btn-outline-dark"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      </div>
      <div className="title col-4 mx-auto">Register</div>

      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>UserNsame</label>
          <input
            type="email"
            className="form-control"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassWord ? "text" : "password"}
            className="form-control"
            value={passWord}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
          <div className="icon">
            {showPassWord ? (
              <BiShowAlt onClick={() => setShowPassWord(false)} />
            ) : (
              <BiHide onClick={() => setShowPassWord(true)} />
            )}
          </div>
        </div>

        <div className="btn-submit-wrap">
          <button
            className="btn btn-submit btn-dark"
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </button>
        </div>
        <div className="back">
          <span onClick={() => navigate("/")}> &#60;&#60; Go to Homepage</span>
        </div>
      </div>
    </div>
  );
};
export default Register;
