import { useInput } from "./useInput";

function ControlledInputs({ onNewColor }) {
  const [title, resetTitle] = useInput('');
  const [color, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    onNewColor(title.value, color.value);

    resetColor("#000000");
    resetTitle("");
  }

  return (
    <div>
      <h3>Controlled Inputs</h3>

      <form className="form" onSubmit={submit}>
        <input
          {...title}
          className="form-input"
          type="text"
          placeholder="Color title..."
          required
        />
        <br />
        <input
          {...color}
          type="color"
          required
        />
        <br />
        <button className="btn" type="submit">Add Color</button>
      </form>
    </div>
  )
}


export default ControlledInputs;