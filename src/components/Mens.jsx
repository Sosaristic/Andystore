import React from "react";
import { useSelector } from "react-redux";
import { ItemsContainer } from "../components/styles/ItemsContainer.styled";
import ItemCard from "../components/ItemCard";

export default function Mens(props){
    const items = useSelector((state) => state.items.items);
const mens = items.filter((item)=> item.category === "men's clothing")
    return(
        
        <>
        <ItemsContainer>
            {mens.map((item) => {
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