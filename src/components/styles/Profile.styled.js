import styled from "styled-components";

export const ProfileStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0);
  color: black;
  text-align: center;
  position: fixed;
  padding: 6px;
  top: 0;
  right: ${({ right }) => right};
  z-index: 1000;
  overflow: hidden;
  transition: all 0.5s ease;

  .content{
    width: 70%;
    height: 100%;
    background-color: white;
    position: absolute;
    right: 0;
    @media(min-width: 768px){
      width: 45%;
    }
  }
.close{
  margin-left: 80%;
  width: fit-content;
  padding: 6px;
  font-size: 2rem;
}
h4{
  margin-top: 2rem;
}
  .signUp {
    padding: 1rem;
    margin-top: 2rem;
  }
  .rule {
    position: relative;
    margin: 1rem auto;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0.8rem;
      background-color: gray;
      height: 1px;
      width: 45%;
    }
    &:before {
      margin-left: -50%;
    }
    &:after {
      margin-left: 10px;
    }
  }
  .profile-container {
    position: relative;
    height: 100%;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .profile-pic {
    position: relative;
    margin: 0 auto;
    height: 6rem;
    width: 6rem;
  }
  .name{
    font-size: small;
    font-weight: bold;
    color: grey;
  }
  .thanks{
    margin-top: 2rem;
    text-align: center;
    color: rosybrown;
    font-weight: bold;
  }
`;
