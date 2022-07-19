import styled from "styled-components"
export const ContactCardStyled = styled.div`
position: relative;
display: flex;
align-items: center;
margin: 1rem auto;
padding: .5rem .5rem;
.icon-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: white;
    color: black;
}
.text-container{
    margin-left: 1rem;
    color: #c0ccc6;
}
.support-type{
    font-size: medium;
    font-weight: bold;
    color: rgb(220, 220, 230);
}
.support-line{
    font-size: small;
}

`