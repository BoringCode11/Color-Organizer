import { useState } from "react";
import Star from "./Star";

const createArray = (length = 1) => [...Array(length)];

const StarRating = ({ totalStars = 5, rating, onRating, id }) => {
  return (
    <>
      {createArray(totalStars).map((_, idx) => (
        <Star
          key={idx}
          selected={rating > idx}
          onRating={onRating}
          idx={idx}
          id={id}
        />
      ))}
      <h3>{rating} of {totalStars} Stars</h3>
    </>
  )
}

export default StarRating