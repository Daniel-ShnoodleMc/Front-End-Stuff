
interface InventoryProps {
  total: number;
}

function Inventory({ total }: InventoryProps) {
  return (
    <div>
      <h2>Inventory</h2>
      <p>Total: {total}</p>
    </div>
  );
}

export default Inventory;