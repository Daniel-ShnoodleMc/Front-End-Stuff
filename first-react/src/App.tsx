import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

interface MaterialsState {
  dirt: number;
  wood: number;
  cobble: number;
  starred: boolean;
}

interface ToolsProps {
  onMine: (material: keyof Omit<MaterialsState, 'starred'>) => void;
}

const Tools: React.FC<ToolsProps> = ({ onMine }) => {
  return (
    <div className="d-flex gap-2">
      <button className="btn btn-primary" onClick={() => onMine('dirt')}>Shovel</button>
      <button className="btn btn-primary" onClick={() => onMine('wood')}>Axe</button>
      <button className="btn btn-primary" onClick={() => onMine('cobble')}>Pickaxe</button>
    </div>
  );
};

interface MaterialsProps extends MaterialsState {}

const Materials: React.FC<MaterialsProps> = ({ dirt, wood, cobble, starred }) => {
  return (
    <div className="space-y-2">
      <div>Dirt: {dirt}</div>
      <div>Wood: {wood}</div>
      <div>Cobble: {cobble}</div>
      <div>Starred: {starred ? 'Yes' : 'No'}</div>
    </div>
  );
};

interface InventoryProps {
  total: number;
}

const Inventory: React.FC<InventoryProps> = ({ total }) => {
  return (
    <div>
      <h2>Inventory</h2>
      <p>Total: {total}</p>
    </div>
  );
};

const App = () => {
  const [materials, setMaterials] = useState<MaterialsState>({
    dirt: 0,
    wood: 0,
    cobble: 0,
    starred: false,
  });

  const handleMine = (material: keyof Omit<MaterialsState, 'starred'>) => {
    setMaterials(prevMaterials => {
      const newMaterials = { ...prevMaterials };
      newMaterials[material] = prevMaterials[material] + 1;
      return newMaterials;
    });
  };

  const handleCreate = () => {
    setMaterials(prevMaterials => ({
      ...prevMaterials,
      dirt: prevMaterials.dirt + 10,
      wood: prevMaterials.wood + 10,
      cobble: prevMaterials.cobble + 10,
      starred: prevMaterials.starred,
    }));
  };

  const handleDelete = () => {
    setMaterials({ dirt: 0, wood: 0, cobble: 0, starred: false });
  };

  const handleUpdate = () => {
    setMaterials(prevMaterials => ({
      ...prevMaterials,
      starred: !prevMaterials.starred,
    }));
  };

  const total = materials.dirt + materials.wood + materials.cobble;

  return (
    <div className="p-4 space-y-4 bg-light min-vh-100">
      <h1 className="text-2xl font-bold">My Minecraft Inventory</h1>
      <Tools onMine={handleMine} />
      <Materials {...materials} />
      <Inventory total={total} />
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={handleCreate}>Create 10 of Each</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete All</button>
        <button className="btn btn-secondary" onClick={handleUpdate}>{materials.starred ? 'Unstar' : 'Star'}</button>
      </div>
    </div>
  );
};

export default App;
