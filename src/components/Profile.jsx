import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ProfileStyled } from "./styles/Profile.styled";
import { ButtonStyled } from "./styles/Button.styled";
import { loginActions } from "../Redux/LogInSlice";
import {MdClose} from "react-icons/md"
import boy from "./images/boy.png";

export default function Profile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let profileBar;

  let showProfileBar = props.displayProfile;

  showProfileBar ? (profileBar = "0") : (profileBar = "-100%");
  const [signUp, setSignUp] = useState(false);

  let authToken = useSelector((state) => state.login.token);
  let {email} = authToken || {}
  useEffect(() => {
    if (authToken) {
      setSignUp(false);
    } else {
      setSignUp(true);
    }
  }, [authToken]);

  const handleLogin = () => {
    props.handleDisplayProfile();
    navigate("/login");
  };
  const handleSignUp = () => {
    props.handleDisplayProfile();
    navigate("/signUp");
  };
  const handleLogout = () => {
    props.handleDisplayProfile();
    dispatch(loginActions.logout());
  };

  return (
    <>
      <ProfileStyled right={profileBar}>
        <div className="content">
        <div className="close" onClick={props.handleDisplayProfile}><MdClose /></div>
       {signUp && <h4>Log in to Andystore</h4>}
        {signUp ? (
          <div className="signUp">
            <ButtonStyled
              width="80%"
              border="none"
              background="red"
              color="white"
              radius="12px"
              padding="4px 8px"
              onClick={handleLogin}
            >
              Log in
            </ButtonStyled>
            <div className="rule"> or </div>
            <ButtonStyled
              width="80%"
              border="none"
              background="grey"
              color="white"
              radius="12px"
              padding="4px 8px"
              onClick={handleSignUp}
            >
              Sign Up
            </ButtonStyled>
          </div>
        ) : (
          <div className="profile-container">
            <div className="profile-pic">
              <img src={boy} alt="" />
            </div>
            <div className="name">{email}</div>
            <div className="thanks">
              Thanks for signing in and <br /> testing this applicaion
            </div>

            <ButtonStyled
              onClick={handleLogout}
              margin="5rem 0 0 0"
              padding="4px 6px"
              radius="8px"
              background={({theme})=>theme.colors.primary}
              color="white"
              border="none"
              width="60%"
            >
              Logout
            </ButtonStyled>
          </div>
        )}
        </div>
      </ProfileStyled>
    </>
  );
}
