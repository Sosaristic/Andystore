import react from "react";
import { Link } from "react-router-dom";
import { SuccessStyled } from "./styles/Success.styled";
import { MdOutlineCheckCircle } from "react-icons/md";
import { ButtonStyled } from "./styles/Button.styled";
export default function Success() {
  window.scrollTo(0, 0);
  return (
    <>
      <SuccessStyled>
        <div className="status-icon">
          <MdOutlineCheckCircle />
        </div>
        <div className="success">Successful</div>
        <p>You have placed your order</p>

        <Link to={"/"}>
          
          <ButtonStyled
            margin="2rem 0 0 0 "
            width="60%"
            padding="4px"
            border="none"
            background="#4b9454"
            radius="12px"
            color="#edfcef"
          >
            Return Home
          </ButtonStyled>
        </Link>
      </SuccessStyled>
    </>
  );
}
