import React from "react";

import { useDispatch } from "react-redux";
import { itemsActions } from "../Redux/ItemsSlice";
import { Link, useNavigate } from "react-router-dom";

import Rating from "./Rating";
import { ItemCardStyled } from "./styles/ItemCard.styled";
import { Container } from "./styles/Container.styled";

import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { ButtonStyled } from "./styles/Button.styled";
import NairaIcon from "./NairaIcon";

export default function ItemCard(props) {
 const navigate = useNavigate()
  
  const dispatch = useDispatch();

  let favorite = props.favorite;
  let itemId = props.id;
  const favoriteClicked = favorite;

  const handleFavorite = (e) => {
    e.stopPropagation();

    dispatch(itemsActions.toogleFavorite({ itemId, favorite }));
  };
  const handleNavigate = ()=> navigate(`/products/${itemId}`)

  return (
    <>
      <ItemCardStyled onClick={handleNavigate}>
        <Container display="flex" direction="column">
       
            {" "}
            <div className="item-image">
              <img className="image" src={props.image} alt="" />
            </div>
         
          <div className="item-title">{props.title}</div>
          <Container
            display="flex"
            alignItems="center"
            padding="0 6px 0 6px"
            position="relative"
          >
            <div className="item-price">
              <NairaIcon amount={props.price} />
            </div>
            <div className="favorite" onClick={handleFavorite} id={props.id}>
              {favoriteClicked ? (
                <ButtonStyled border="none">
                  {" "}
                  <MdOutlineFavorite size={25} color="coral" />
                </ButtonStyled>
              ) : (
                <ButtonStyled border="none">
                  <MdOutlineFavoriteBorder size={25} color="coral" />
                </ButtonStyled>
              )}
            </div>
          </Container>
         <div className="rating"> <Rating rating={props.rating} /></div>
        </Container>
      </ItemCardStyled>
    </>
  );
}
