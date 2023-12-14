import Button from "./Button";

export default function AddItemForm() {
  return (
    <form>
      <h2>Add an Item</h2>
      <input type="text" placeholder="Add Item here" />
      <Button label="Add item to list" />
    </form>
  );
}
