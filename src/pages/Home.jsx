import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ItemCard from "../components/ItemCard";
import { ItemsContainer } from "../components/styles/ItemsContainer.styled";
import { MdAdd } from "react-icons/md";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../Redux/ItemsSlice";
import { ButtonStyled } from "../components/styles/Button.styled";
import { Container } from "../components/styles/Container.styled";

//const baseURL = "https://fakestoreapi.com/products?limit=8";

export default function Home(props) {
 //const location = useLocation();
 //console.log(location);
  const dispatch = useDispatch();
  const [count, setCount] = useState(12);
  const items = useSelector((state) => state.items.items);
  const slicedItems = items.slice(0, count);
  useEffect(() => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const baseURL = `https://fakestoreapi.com/products`;
    axios
      .get(baseURL, config)
      .then((response) => {
        const newData = [...response.data];

        const modified = newData.map((item) => {
          return {
            ...item,
            isFavorite: false,
            isAdded: false,
          };
        });
        if (items.length === 0) {
          dispatch(itemsActions.addItems(modified));
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, [dispatch,  items]);

  const handleCount = () => {
    setCount(state=> state + 4)
  };
  

  return (
    <>
    
   <Container position="relative" display="flex" direction="column">
      <ItemsContainer>
        {items.length === 0 && <div className="not-found">fetching data please wait...</div>}
       
        {slicedItems.map((item) => {
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
      { slicedItems.length > 0 && slicedItems.length < 20 &&<ButtonStyled
          margin="1rem auto"
          background={({ theme }) => theme.colors.primary}
          border="none"
          color="white"
          padding="8px 10px"

          onClick={handleCount}
        >
          <MdAdd /> More
        </ButtonStyled>}
      </Container>
     
    </>
  );
}
