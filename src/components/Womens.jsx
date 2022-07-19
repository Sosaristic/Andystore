import React from "react";
import { useSelector } from "react-redux";
import { ItemsContainer } from "../components/styles/ItemsContainer.styled";
import ItemCard from "../components/ItemCard";

export default function Womens(props){
    const items = useSelector((state) => state.items.items);
const womens = items.filter((item)=> item.category === "women's clothing")
    return(
        
        <>
        <ItemsContainer>
            {womens.map((item) => {
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