import { useState } from "react";
import ColorList from "./ColorOrganizer/ColorList/ColorList";
import Form from "./ColorOrganizer/AddColor/Form";
import { data, genId } from "./ColorOrganizer/index";

function App() {
  const [colors, setColors] = useState(data);

  const onRemove = (id) => {
    const newColors = [...colors].filter(color => (color.id !== id));

    setColors(newColors);
  }

  const onRating = (idx, id) => {
    const newColors = [...colors].map(color => (
      (color.id === id) ? { ...color, rating: idx + 1 } : { ...color }
    ));

    setColors(newColors);
  }

  const onAddColor = (title, color) => {
    const newColor = {
      title,
      color,
      id: genId(),
      rating: 0
    }

    setColors([...colors, newColor]);
  }

  return (
    <div>
      <Form onAddColor={onAddColor} />

      {colors.map(color => (
        <ColorList
          key={color.id}
          onRemove={onRemove}
          onRating={onRating}
          {...color} />
      ))}
    </div>
  )
}

export default App;