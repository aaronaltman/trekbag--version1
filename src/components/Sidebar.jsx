import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  setItems,
  onClick,
  handleRemoveAll,
  handleResettoInitial,
  markAllComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGroup
        markAllComplete={markAllComplete}
        handleResettoInitial={handleResettoInitial}
        handleRemoveAll={handleRemoveAll}
        onClick={onClick}
      />
    </div>
  );
}
