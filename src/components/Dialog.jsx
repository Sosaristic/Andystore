import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonStyled } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { DialogStyled } from "./styles/Dialog.styed";
import { cartActions } from "../Redux/CartSlice";
import { itemsActions } from "../Redux/ItemsSlice";

export default function Dialog(props) {
  const dispatch = useDispatch();
  const { current } = props.id;
  const items = useSelector((state) => state.items.items);
  const itemsFiltered = items.filter((item) => item.id === current);
  const { isAdded } = itemsFiltered[0] || {};
  const handleDialog = (e) => {
    const { innerText } = e.target;
    if (innerText === "Cancel") {
      props.handleDialog();
    } else {
      const itemId = current
      dispatch(itemsActions.toogleItemAdded({ itemId, isAdded }));

      dispatch(cartActions.removeFromCart(current));
      props.handleDialog();
    }
  };
  return (
    <DialogStyled>
      <div className="wrapper">
        <div className="text">Remove item from shopping cart?</div>
        <Container
          position="relative"
          display="flex"
          justify="space-around"
          alignItems="center"
          margin="1rem auto"
        >
          <ButtonStyled
            padding="8px 12px"
            background="lightgray"
            color="black"
            border="none"
            onClick={handleDialog}
          >
            Cancel
          </ButtonStyled>
          <ButtonStyled
            padding="6px 6px"
            border="none"
            background={({ theme }) => theme.colors.primary}
            color="white"
            onClick={handleDialog}
          >
            Ok
          </ButtonStyled>
        </Container>
      </div>
    </DialogStyled>
  );
}
