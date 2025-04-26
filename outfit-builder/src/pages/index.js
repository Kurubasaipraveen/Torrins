import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ClothingItem from '../components/ClothingItem';
import Canvas from '../components/Canvas';

export default function Home() {
  const clothingItems = [
    { type: 'Tshirt', src: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1745391587/ao98abrv9ljcqlvxoybf.png' },
    { type: 'pants', src: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1745391584/xfc12djc1y3hih500fdm.png' },
    { type: 'dress Women', src: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1745391587/bhhlnsohhegfoauvbbfb.png' },
    { type: 'dress Men', src: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1745391588/pjximdm3n3aqfizcc01e.png' },
    { type: 'cap', src: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1745391581/lnfrcgaqu9pn6yugri5m.png' },
    { type: 'shoes', src: 'https://res.cloudinary.com/dyutmmnia/image/upload/v1745391577/sdrmfqwaqvgpbbpfer9j.png' },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', padding: '20px', fontFamily: 'sans-serif' }}>
        {/* Sidebar */}
        <div style={{
          border: '1px solid #ccc',
          padding: '10px',
          width: '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          {clothingItems.map((item) => (
            <ClothingItem key={item.type} type={item.type} src={item.src} />
          ))}
        </div>

        {/* Canvas */}
        <div style={{ marginLeft: '20px' }}>
          <Canvas />

          {/* Controls */}
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <button onClick={() => window.location.reload()}>Reset</button>
            <button style={{padding:'20px'}}>Save Outfit</button>
            <button >Add to Cart 🛒</button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
