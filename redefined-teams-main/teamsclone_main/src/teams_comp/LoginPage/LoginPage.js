import { useRef, useState } from "react";
import { useAuth } from "../../processAuth";
import { Link, useHistory } from "react-router-dom";
import "./LoginPage.scss";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed Log In Attempt");
    }

    setLoading(false);
  }

  return (
    <div className="App">
      <div className="appAside">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNC_hEsfze2agtcoNIK5jjxtsfyKp1F1wQA&usqp=CAU" className="img"></img>
        <img src="https://s3.us-east-1.amazonaws.com/files.tvisha.aws/posts/crm/panel/attachments/1592670168/webp-net-resizeimage-min.png" className="img2"></img>
        <img src="https://www.techrepublic.com/a/hub/i/r/2020/04/30/310d3603-2b5d-4a64-8bbb-f44c56854209/resize/1200x/5197d44becbfc19d0cdf719004fd4a02/microsoft-teams.jpg" className="img3"></img>
        <div className="overlay"></div>
      </div>
      <div className="appForm">
        {error && <alert variant="danger">{error}</alert>}
        <div className="pageSwitcher">
          <Link to="/login" className="pageSwitcherItem-active leftItem">
            Sign-In
          </Link>
          <Link exact to="/" className="pageSwitcherItem rightItem">
            Sign-Up
          </Link>
        </div>

        <div className="formTitle">
          <Link to="/login" className="formTitleLink">
            Sign In
          </Link>{" "}
          |{" "}
          <Link exact to="/" className="formTitleLink2">
            Sign Up
          </Link>
        </div>

        <div className="formCenter">
          <form className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                EMAIL-ADDRESS
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter email"
                name="email"
                ref={emailRef}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter password"
                name="password"
                ref={passwordRef}
              />
            </div>
            

            <div className="formField">
              <button className="formFieldButton" onClick={handleSubmit}>
                SIGN IN
              </button>{" "}
              <Link to="/forgot-password" className="formFieldLink">
                  RESET PASSWORD
              </Link>{" "}
              <Link to="/" className="formFieldLink">
                CREATE ACCOUNT
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}