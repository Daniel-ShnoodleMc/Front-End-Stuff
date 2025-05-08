import { useState } from 'react';
import Tools from './Tools';
import Materials from './Materials';
import Inventory from './Inventory';

interface MaterialsState {
  dirt: number;
  wood: number;
  cobble: number;
}

function App() {
  const [materials, setMaterials] = useState<MaterialsState>({
    dirt: 0,
    wood: 0,
    cobble: 0,
  });

  const handleMine = (material: keyof MaterialsState) => {
    setMaterials(prevMaterials => ({
      ...prevMaterials,
      [material]: prevMaterials[material] + 1,
    }));
  };

  return (
    <div>
      <h1>Minecraft Simulator!!!</h1>
      <Tools onMine={handleMine} />
      <Materials dirt={materials.dirt} wood={materials.wood} cobble={materials.cobble} />
      <Inventory total={materials.dirt + materials.wood + materials.cobble} />
    </div>
  );
}

export default App;