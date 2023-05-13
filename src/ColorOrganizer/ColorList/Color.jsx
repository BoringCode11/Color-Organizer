import StarRating from "../Stars/StarRating";
import { FaTrash } from "react-icons/fa";

const Color = (props) => {
  const { title, color, onRemove, id, rating, onRating } = props;

  return (
    <div style={{ marginBlockEnd: "2em" }}>
      <h3>{title}</h3>
      <button
        className="btn"
        onClick={() => onRemove(id)}
      >
        <FaTrash />
      </button>

      <div style={{ width: "220px", height: "50px", background: color, marginInline: "auto", borderRadius: ".5em" }}></div>

      <StarRating rating={rating} onRating={onRating} id={id} />
    </div>
  )
}

export default Color;