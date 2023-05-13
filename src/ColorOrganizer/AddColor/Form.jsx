import { useInput } from "./useInput";

const Form = ({ onAddColor }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    onAddColor(titleProps.value, colorProps.value);

    resetTitle();
    resetColor();
  }

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <label htmlFor="title" className="form-label">Title</label>
        <input
          {...titleProps}
          id="title"
          type="text"
          placeholder="Color"
          required
          className="form-input"
        />
        <br /><br />

        <label htmlFor="color" className="form-label">Color</label>
        <input
          {...colorProps}
          id="color"
          type="color"
          required
          className="form-input"
        />
        <br /><br />

        <button className="btn">Add Color</button>
      </form>
    </div>
  )
}

export default Form;