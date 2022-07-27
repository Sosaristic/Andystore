import styled from "styled-components";


export const StyledNav = styled.nav`
position: fixed;
top: 0;
left: ${({left})=> left};
background-color: rgba(255, 255, 255, 0);
width: 100vw;
z-index: ${({theme})=>theme.zIndex.level5};
min-height: 100vh;
transition: all .4s ease;
padding: 6px 8px;


@media(min-width: 992px){
  position: relative;
  left: 0;
  max-width: 15%;
  min-height: 100%;
  z-index: 0;

}
`
export const NavContainer = styled.div`
position: relative;
width: 70%;
height: 100vh;
background-color: white;
padding: 1rem 1.5rem;
@media(min-width: 768px){
  width: 100%;
  padding: 4px 6px;
}

.left-icon{
  width: 2rem;
  margin-left: auto;
  @media(min-width: 992px){
 
    display: none;
  
  }
}
.site-title{
  @media(min-width: 992px){
    display: none;
  }
}

hr {
  margin: .5rem 0;
  @media(min-width: 992px){
    display: none;
  }
}
h4 {
  margin-top: 1rem;
  color: #A9A9A9;
  font-weight: bold;
}
.favorite{
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  height: 3rem;
  margin-top: 2rem;
  padding: 2px 4px;

  font-size: large;
  font-weight: bold;
  color: gray;
  @media(min-width: 768px){
    width: 80%;
   
  }
}
.favorite > span{
  position: relative;
  top: 1px;
  margin-left: auto;
}
.favorite > .favorite-count{
  position: relative;
  top: -1px;
  color: coral;
}

`
