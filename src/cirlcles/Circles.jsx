import { useState } from 'react';
import './Circles.css';

const genRandomColor = () => {
  const chars = "abcdef0123456789";
  let hexColor = "#";

  for (let idx = 0 length < 6; idx++) {
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

    if (circlesCpy.length < 1) 
      return;

    const removedCirle = circlesCpy.pop();
    setCircles(circlesCpy);
    setRemovedCircles([...removedCircles, removedCirle]);
  }

  const handleRedo = () => {
    const circlesCpy = [...removedCircles];

    if (circlesCpy.length < 1)  
      return;

    const removedCircle = circlesCpy.pop();
    setRemovedCircles(circlesCpy);
    setCircles([...circles, removedCircle]);
  }

  return (
    <>
      <div onClick={handleCreateCircle} className='app'>
        {circles.map((circle, idx) => {
          const { pageX, pageY, color } = circle;
          const circleStyle = { top: pageY - 20, left: pageX - 20, background: color };
          return <div key={idx} className='circle' style={circleStyle}></div>;
        })}
      </div>

      <div className="btns">
        <h5>Number of Circles: {circles.length}</h5>
        <button onClick={handleUndo} className='btn'>undo</button>
        <button onClick={handleRedo} className='btn'>redo</button>
      </div>
    </>
  );
}

export default Circles;
