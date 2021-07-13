import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../processAuth";
import { Link } from "react-router-dom";
import "./ForgotPassword.scss";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="main-cont">
        <div className="left-side">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNC_hEsfze2agtcoNIK5jjxtsfyKp1F1wQA&usqp=CAU" className="img"></img>
        <img src="https://s3.us-east-1.amazonaws.com/files.tvisha.aws/posts/crm/panel/attachments/1592670168/webp-net-resizeimage-min.png" className="img2"></img>
        <img src="https://www.techrepublic.com/a/hub/i/r/2020/04/30/310d3603-2b5d-4a64-8bbb-f44c56854209/resize/1200x/5197d44becbfc19d0cdf719004fd4a02/microsoft-teams.jpg" className="img3"></img>
        <div className="overlay"></div>
        </div>
        <div className="right-side">
          <div className="cls"></div>
          <div className="pass-res-area">Password Reset</div>
          <div className="inside">
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form className="main-act-area" onSubmit={handleSubmit}>
              <div className="main-area">
                <label className="main-area-email" htmlFor="email">
                  E-MAIL PASSWORD
                </label>
                <input
                  type="email"
                  id="email"
                  className="enter-email"
                  placeholder="Enter your email"
                  name="email"
                  ref={emailRef}
                />
              </div>

              <div className="main-area">
                <button
                  disabled={loading}
                  className="sbmt-btn"
                  type="submit"
                >
                  RESET PASSWORD
                </button>
              </div>

              <div className="main-area">
                <Link to="/login" className="main-area-login">
                  Login
                </Link>
                <Link to="/" className="main-area-login">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}