import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "../components/ContactCard";

import { AboutStyled } from "../components/styles/About.styled";
import { Container } from "../components/styles/Container.styled";

import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { StoreName, StoreSub } from "../components/styles/Header.styled";

export default function About(props) {
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <>
      <AboutStyled>
        <Container background="#0d1117" padding="4px 16px">
          <ContactCard
            icon={<MdEmail size={25} />}
            supportType={"EMAIL"}
            supportLine={"sundayomena9@gmail.com"}
          />
          <ContactCard
            icon={<MdPhone size={25} />}
            supportType={"PHONE"}
            supportLine={"+2348149248384, +2349056605948"}
          />
          <ContactCard
            icon={<FaWhatsapp size={25} />}
            supportType={"WHATSAPP"}
            supportLine={"+2348149248384"}
          />
        </Container>

        <Container
          display="flex"
          direction="column"
          alignItems="center"
          justify="center"
          position="relative"
          padding="2rem 0"
        >
          <Link to="/">
          <StoreName color="#c0ccc6">
            ANDY<StoreSub color="#c0ccc6">store</StoreSub>
          </StoreName>
          </Link>
          <p className="motto">shopping made easy</p>
          <p className="copyright">Copyright &copy; {year} Andystore</p>
        </Container>
        
      </AboutStyled>
    </>
  );
}
