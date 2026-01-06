import { useState } from "react";
import "./Login.scss";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast, ToastContainer } from "react-toastify";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [showPassWord, setShowPassWord] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async () => {
    // validate

    // submit apis
    let data = await postLogin(email, passWord);
    console.log("this is login, ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span></span> Already have an account?
        <button
          className="btn  btn-outline-dark"
          onClick={() => navigate("/register")}
        >
          Sign up
        </button>
      </div>
      <div className="title col-4 mx-auto">Long Beo Education</div>
      <div className="welcome col-4 mx-auto">Hello, who's this</div>
      <div className="content-form col-4 mx-auto">
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
        <span className="forgot-password">Forgot password ?</span>
        <div className="btn-submit-wrap">
          <button
            className="btn btn-submit btn-dark"
            onClick={() => {
              handleLogin();
            }}
          >
            Login to Leo Education
          </button>
        </div>
        <div className="back">
          <span onClick={() => navigate("/")}> &#60;&#60; Go to Homepage</span>
        </div>
      </div>
    </div>
  );
};
export default Login;
