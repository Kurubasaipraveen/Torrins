import { useDrop } from 'react-dnd';
import { useState } from 'react';

const Canvas = () => {
  const [items, setItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CLOTHING',
    drop: (item) => setItems((prev) => [...prev, item]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: '300px',
        height: '400px',
        border: '2px dashed gray',
        position: 'relative',
        backgroundColor: isOver ? '#f0f0f0' : 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <h4 style={{ position: 'absolute', top: 5 }}>CANVAS AREA</h4>
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.type}
          style={{ width: '80px', margin: '5px' }}
        />
      ))}
    </div>
  );
};

export default Canvas;
