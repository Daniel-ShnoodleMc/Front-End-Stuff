

interface MaterialsProps {
  dirt: number;
  wood: number;
  cobble: number;
}

function Materials({ dirt, wood, cobble }: MaterialsProps) {
  return (
    <div>
      <h2>Materials</h2>
      <div>Dirt: {dirt}</div>
      <div>Wood: {wood}</div>
      <div>Cobble: {cobble}</div>
    </div>
  );
}

export default Materials;