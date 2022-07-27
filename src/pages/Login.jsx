import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonStyled } from "../components/styles/Button.styled";
import { LoginStyled } from "../components/styles/Login.styled";
import { Link } from "react-router-dom";
import {app} from '../components/firebase-config'
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { loginActions } from "../Redux/LogInSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let authToken = useSelector((state) => state.login.token);
  useEffect(() => {
    if (authToken) {
      navigate("/");
    }
  }, [authToken, navigate]);
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
    signInWithEmailAndPassword(authentication, username, password)
      .then((response) => {
        const { email, refreshToken } = response._tokenResponse;

        dispatch(loginActions.addUser({ email, refreshToken }));
        toast.success("logged in", {
          autoClose: 2000,
        })
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("User not found, please check email");
        }
        if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password!");
        }
        if(error.code === "auth/too-many-requests"){
          toast.error("Too many attempts, try again later")
        }
      });
  };
  return (
    <>
      <LoginStyled>
        <div className="header-text">Log In</div>

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
            background={({ theme }) => theme.colors.primary}
            width="100%"
            border="none"
            padding="6px"
            radius="8px"
            color="white"
          >
            Login
          </ButtonStyled>
        </form>
        <div className="have-account">
          Don't have a free account yet? <Link to="/signUp">Sign up</Link>
        </div>
      </LoginStyled>
    </>
  );
}
