import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ItemsContainer } from "../components/styles/ItemsContainer.styled";
import ItemCard from "../components/ItemCard";

export default function Electronics(props){
  const location = useLocation()
    const items = useSelector((state) => state.items.items);
const electronics = items.filter((item)=> item.category === "electronics")
    return(
        
        <>
        <ItemsContainer>
            {electronics.map((item) => {
          return (
            <ItemCard
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              key={item.id}
              favorite={item.isFavorite}
              isAdded={item.isAdded}
            />
          );
        })}
        </ItemsContainer>
        </>
    )
}