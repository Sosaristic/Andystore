import React from "react";
import { ContactCardStyled } from "./styles/ContactCard.styled";



export default function ContactCard({icon, supportType, supportLine}){
    return(
        <>
        <ContactCardStyled>
            <div className="icon-container">{icon}</div>
            <div className="text-container">
                <p className="support-type">{supportType}</p>
                <p className="support-line">{supportLine}</p>
            </div>
        </ContactCardStyled>
        </>
    )
}