import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputActions } from "../Redux/InputSlice";
import Input from "./Input";
import { ShippingStyled } from "./styles/Shipping.styled";
export default function Shipping() {
    const dispatch = useDispatch()
  const navigate = useNavigate();
  const initialValues = {
    fullname: "",
    address: "",
    email: "",
    phone: ""
}
const [values, setValues] = useState(initialValues);
  window.scrollTo(0, 0);

  const handleInput = (e)=>{
const {name, value} = e.target
setValues({
    ...values,
    [name] : value
})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
dispatch(inputActions.addInputData(values))

    navigate("/checkout/review");
  };
 
  return (
    <>
      <ShippingStyled>
        <h3>1. Shipping</h3>

        <form onSubmit={handleSubmit}>
          <Input name="Full Name" type="text" inputName="fullname" handleInput={handleInput} value={values.fullname}/>
          <Input name="Address" type="text" inputName="address" handleInput={handleInput} value={values.address}/>

          <Input name="Email" type="email" inputName="email" handleInput={handleInput} value={values.email}/>
          <Input name="Phone Number" type="tel" inputName="phone" handleInput={handleInput} value={values.phone}/>
          <button type="submit">Continue to Review</button>
        </form>

        <h3 className="others">2. Review</h3>
      </ShippingStyled>
    </>
  );
}
