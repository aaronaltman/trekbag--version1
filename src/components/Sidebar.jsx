import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  setItems,
  onClick,
  handleRemoveAll,
  handleResettoInitial,
  markAllComplete,
  markAllIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGroup
        markAllIncomplete={markAllIncomplete}
        markAllComplete={markAllComplete}
        handleResettoInitial={handleResettoInitial}
        handleRemoveAll={handleRemoveAll}
        onClick={onClick}
      />
    </div>
  );
}
