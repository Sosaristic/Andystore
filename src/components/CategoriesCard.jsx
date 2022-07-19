import React from "react";
import { StyledCategoriesCard } from "./styles/CategoriesCard.styled";
import { useNavigate } from "react-router-dom";

export default function CategoriesCard(props) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    props.handleDisplaySideBar();
    navigate(`categories/${props.link}`);
  };
  return (
    <>
      <StyledCategoriesCard onClick={handleNavigation}>
        <div>
          <img src={props.image} alt={props.alt} />
        </div>
        <p>{props.title}</p>
      </StyledCategoriesCard>
    </>
  );
}
