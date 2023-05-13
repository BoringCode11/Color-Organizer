import { useState } from 'react';
import './Circles.css';

const genRandomColor = () => {
  const chars = "abcdef0123456789";
  let hexColor = "#";

  while (hexColor.length <= 6) {
    const randomIdx = Math.floor(Math.random() * chars.length);
    hexColor += chars.charAt(randomIdx);
  }

  return hexColor;
}

const Circles = () => {
  const [circles, setCircles] = useState([]);
  const [removedCircles, setRemovedCircles] = useState([]);

  const handleCreateCircle = (eObj) => {
    const { pageX, pageY } = eObj;

    setCircles([
      ...circles,
      { pageX, pageY, color: genRandomColor() }
    ]);
  }

  const handleUndo = () => {
    const circlesCpy = [...circles];

    if (circlesCpy.length < 1) { return };

    const removedCirle = circlesCpy.pop();
    setCircles(circlesCpy);
    setRemovedCircles([...removedCircles, removedCirle]);
  }

  const handleRedo = () => {
    const circlesCpy = [...removedCircles];

    if (circlesCpy.length < 1) { return };

    const removedCircle = circlesCpy.pop();
    setRemovedCircles(circlesCpy);
    setCircles([...circles, removedCircle]);
  }

  return (
    <div>
      <div onClick={handleCreateCircle} className='app'>
        {circles.map(circle => {
          const { pageX, pageY, color } = circle;

          return <div className='circle' style={{ top: pageY - 20, left: pageX - 20, background: color }}></div>;
        })}
      </div>

      <div className="btns">
        <h5>Number of Circles: {circles.length}</h5>
        <button onClick={handleUndo} className='btn'>undo</button>
        <button onClick={handleRedo} className='btn'>redo</button>
      </div>
    </div>
  );
}

export default Circles;