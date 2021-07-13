import React, { useRef, useState } from "react";
import { useAuth } from "../../processAuth";
import './SignUpPage.scss';
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-MAIL ADDRESS
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
            <label className="formFieldLabel" htmlFor="confirm-password">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              id="confirm-password"
              className="formFieldInput"
              placeholder="Confirm password"
              name="password"
              ref={passwordConfirmRef}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign-Up</button>{" "}
            <Link to="/login" className="formFieldLink">
              LOGIN
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}