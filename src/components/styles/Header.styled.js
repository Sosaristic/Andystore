import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-evenly;
  padding: 1rem 0;
  z-index: ${({ theme }) => theme.zIndex.level4};
  @media(min-width: 992px){
    position: relative;
    z-index: 0;
    background-color: black;
    color: white;
    justify-content: flex-start;
    padding: 1.2rem 2rem;
  
  }
`;
export const MenuIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  @media(min-width: 992px){
    display: none;
  }
`;
export const StoreName = styled.div`
  color: ${({textColor}) => textColor};
  font-size: x-large;
  font-weight: bold;
  width: fit-content;
`;
export const StoreSub = styled.div`
  display: inline-block;
  color: ${({ myColor }) => myColor};
`;
export const UserIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  @media(min-width: 992px){
    margin-left: 80%;
  }
`;
export const Cart = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  @media(min-width: 992px){
    margin-left: 3.5rem;
  }
  .cart-length {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    top: -4px;
    right: 0;
    text-align: center;
    color: white;
    font-size: small;
    background-color: ${({ theme }) => theme.colors.primary};
    
    border-radius: 50%;
  }
`;
