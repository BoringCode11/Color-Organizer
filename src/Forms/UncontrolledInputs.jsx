import { useRef } from "react";

function Forms() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (eObj) => {
    eObj.preventDefault();

    // grab values from ref
    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    console.log(title, color);

    txtTitle.current.value = "";
    hexColor.current.value = "";
  }


  return (
    <div>
      <h3>Working with Forms and useRef hook</h3>

      <form className="form" onSubmit={submit}>
        <input
          ref={txtTitle}
          className="form-input"
          type="text"
          placeholder="Color title..."
          required
        />
        <br />
        <input
          ref={hexColor}
          type="color"
          required
        />
        <br />
        <button className="btn" type="submit">Add Color</button>
      </form>

    </div>
  )
}

export default Forms;


// useRef() hook -> allows us to access DOM nodes directly, this hook return an object dat stores values for the lifetime of a component

// e.preventDefault() prevents the browser from submitting the form using POST request

// create a reference: variable
// we can set the ref values directly in JSX using ref property

// we capture the current values for each of the form elements using theirs "refs"