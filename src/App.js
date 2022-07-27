import React, { useRef } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

import Header from "./components/header";
import SideNav from "./components/SideNav";

import { ThemeProvider } from "styled-components";
import { MyTheme } from "./components/styles/Theme";
import MyCart from "./components/Cart";
import Home from "./pages/Home";
import Description from "./components/Description";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Review from "./components/Review";
import Success from "./components/Success";
import Profile from "./components/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Dialog from "./components/Dialog";
import Electronics from "./pages/Electronics";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Jewelries from "./components/Jewelries";
import { RoutesContainer } from "./components/styles/OverallContainer.styled";

function App() {
  const [displaySideBar, setDisplaySideBar] = useState(true);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [dialog, setDialog] = useState(false);
  const itemId = useRef(null);
  const handleDisplaySideBar = () => setDisplaySideBar(!displaySideBar);
  const handleDisplayProfile = () => setDisplayProfile(!displayProfile);

  const handleDialog = (id, isAdded) => {
    itemId.current = id;
    setDialog(!dialog);
  };
  const handleDialogOptions = () => {};

  return (
    <>
      <ThemeProvider theme={MyTheme}>
        <GlobalStyles />
        <Container position={"relative"}>
          <ToastContainer hideProgressBar={true} autoClose={2000} />
          <Header
            handleDisplaySideBar={handleDisplaySideBar}
            handleDisplayProfile={handleDisplayProfile}
          />

          <Profile
            displayProfile={displayProfile}
            handleDisplayProfile={handleDisplayProfile}
          />
          <Container display="flex">
            <SideNav
              displaySideBar={displaySideBar}
              handleDisplaySideBar={handleDisplaySideBar}
            />
            {dialog && (
              <Dialog
                handleDialog={handleDialog}
                handleDialogOptions={handleDialogOptions}
                id={itemId}
              />
            )}

            <RoutesContainer>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home handleDisplaySideBar={handleDisplaySideBar} />}
                />
                <Route
                  exact
                  path="/cart"
                  element={<MyCart handleDialog={handleDialog} />}
                />
                <Route exact path={`/products/:id`} element={<Description />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/checkout/review" element={<Review />} />
                <Route exact path="/checkout/success" element={<Success />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signUp" element={<SignUp />} />
                <Route
                  exact
                  path="/categories/electronics"
                  element={<Electronics />}
                />
                <Route
                  exact
                  path={`/categories/electronics/products/:id`}
                  element={<Description />}
                />
                <Route exact path="/categories/mens" element={<Mens />} />
                <Route
                  exact
                  path={`/categories/mens/products/:id`}
                  element={<Description />}
                />
                <Route exact path="/categories/women" element={<Womens />} />
                <Route
                  exact
                  path={`/categories/women/products/:id`}
                  element={<Description />}
                />
                <Route
                  exact
                  path="/categories/jewelries"
                  element={<Jewelries />}
                />
                <Route
                  exact
                  path={`/categories/jewelries/products/:id`}
                  element={<Description />}
                />
              </Routes>
              </RoutesContainer>
          </Container>

          <About />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
