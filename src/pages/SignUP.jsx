import React, { useState } from "react";
import { ButtonStyled } from "../components/styles/Button.styled";
import { LoginStyled } from "../components/styles/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {app} from '../components/firebase-config'

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { loginActions } from "../Redux/LogInSlice";
import { useEffect } from "react";

export default function SignUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let authToken = useSelector((state) => state.login.token);
  let {  refreshToken } = authToken || {};

  useEffect(() => {
    if (refreshToken) {
      navigate("/");
    }
  }, [refreshToken, navigate]);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, username, password)
      .then((response) => {
        const { email, refreshToken } = response._tokenResponse;
        dispatch(loginActions.addUser({ email, refreshToken }));
        toast.success("Registration successful");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        }
        
      });
  };

  return (
    <>
      <LoginStyled>
        <div className="header-text">Create your free account</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="username"
            placeholder="Email"
            name="username"
            value={values.username}
            onInput={handleInput}
          />
          <input
            type="password"
            className="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onInput={handleInput}
            minLength={9}
          />

          <ButtonStyled
            type="submit"
            background="gray"
            width="100%"
            border="none"
            padding="6px"
            radius="8px"
            color="white"
          >
            Get started
          </ButtonStyled>
        </form>
        <div className="have-account">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </LoginStyled>
    </>
  );
}
