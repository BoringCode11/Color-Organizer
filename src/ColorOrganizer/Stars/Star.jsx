import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onRating, idx, id }) => {
  return <FaStar
    color={selected ? "red" : "grey"}
    onClick={() => onRating(idx, id)}
  />
}

export default Star;