

interface ToolsProps {
  onMine: (material: 'dirt' | 'wood' | 'cobble') => void;
}

function Tools({ onMine }: ToolsProps) {
  return (
    <div>
      <h2>Tools</h2>
      <button onClick={() => onMine('dirt')}>Shovel</button>
      <button onClick={() => onMine('wood')}>Axe</button>
      <button onClick={() => onMine('cobble')}>Pickaxe</button>
    </div>
  );
}

export default Tools;