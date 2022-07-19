import styled from "styled-components";
export const StyledCategoriesCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px 2px;
  width: 100%;
  height: 3rem;
  margin: 1rem 0;
  
  color: gray;

  div {
    position: relative;
    height: 90%;
    width: 25%;
    
  }
  div > img {
    width: 100%;
    height: 100%;
  }
  p {
    width: 70%;
    text-align: left;
    margin-left: 5px;
  }
`;
