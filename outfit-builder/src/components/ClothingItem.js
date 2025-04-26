import { useDrag } from 'react-dnd';

const ClothingItem = ({ type, src }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CLOTHING',
    item: { type, src },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={src}
      alt={type}
      style={{
        width: '50px',
        margin: '10px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
    />
  );
};

export default ClothingItem;
