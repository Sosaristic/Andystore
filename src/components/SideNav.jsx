import React from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

import CategoriesCard from "./CategoriesCard";
import { StyledNav, NavContainer } from "./styles/SideNav.syled";

import { StoreName, StoreSub } from "./styles/Header.styled";

import electronics from "./images/electronics.jpg";
import women from "./images/womens.jpg";
import men from "./images/mens.jpg";
import jewelry from "./images/jewelry.jpg";

import { MdFavoriteBorder } from "react-icons/md";
import { CgArrowLongLeft } from "react-icons/cg";
import { FlexibleDiv } from "./styles/FlexibleDiv.styled";

export default function SideNav(props) {
  const items = useSelector((state) => state.items.items);
  const favoriteItems = (items.filter((item)=>item.isFavorite === true)).length
  let sideBar;

  const showSideBar = props.displaySideBar;
  showSideBar ? (sideBar = "-100%") : (sideBar = "0");

  return (
    <>
      <StyledNav left={sideBar}>
        <NavContainer>
          <FlexibleDiv>
            <Link to="/">
              <div className="site-title" onClick={props.handleDisplaySideBar}>
            <StoreName textColor={({theme})=>theme.colors.primary}>
              ANDY<StoreSub myColor="coral">store</StoreSub>
            </StoreName >
            </div>
            </Link>
            <div className="left-icon">
              <CgArrowLongLeft size={30} color={"gray"} onClick={props.handleDisplaySideBar}/>
            </div>
          </FlexibleDiv>

          <hr />
          <h4>Categories</h4>
          <CategoriesCard
            image={men}
            alt={"men's logo"}
            title={"Men's Clothing"}
            handleDisplaySideBar={props.handleDisplaySideBar}
            link="mens"

          />
          <CategoriesCard
            image={women}
            alt={"Women's logo"}
            title={"Women's Clothing"}
            handleDisplaySideBar={props.handleDisplaySideBar}
            link="women"

          />
          <CategoriesCard
            image={electronics}
            alt={"electronics logo"}
            title={"Electronics"}
            handleDisplaySideBar={props.handleDisplaySideBar}
            link="electronics"
          />
          <CategoriesCard
            image={jewelry}
            alt={"Jeweries logo"}
            title={"Jewelries"}
            handleDisplaySideBar={props.handleDisplaySideBar}
            link="jewelries"

          />
          <div className="favorite">
            Favorites
            <span>
              <MdFavoriteBorder color="red" />
            </span>
            <span className="favorite-count">{favoriteItems}</span>
          </div>
        </NavContainer>
      </StyledNav>
    </>
  );
}
