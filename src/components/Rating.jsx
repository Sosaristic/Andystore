import React from "react";

import { RatingStyled } from "./styles/Rating.styled";
import { MdStar } from "react-icons/md";


export default function Rating({rating: {rate, count}, reviewText}) {
  let rating = Math.floor(rate);

  return (
    <RatingStyled display="flex" alignItems="center" padding="4px 0">
    
      {[...Array(rating)].map((e, i) => {
        return  <MdStar color="maroon" size={18} key={i} />;
      })}
      {[...Array(5 - rating)].map((e, i) => {
        return <MdStar color="grey" size={18} key={i} />;
      })}
        {reviewText?  <div className="review-text">{`${count} Reviews`}</div>: <div className="count">({count})</div>}
        
      
    
    </RatingStyled>
  );
}
