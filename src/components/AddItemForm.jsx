import Button from "./Button";
import { useState } from "react";

export default function AddItemForm() {
  const [itemText, setItemText] = useState(""); // [
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h2>Add an Item</h2>
      <input
        type="text"
        value={itemText}
        placeholder="Add Item here"
        onChange={(e) => {
          setItemText(e.target.value);
          console.log(itemText);
        }}
      />
      <Button>Add Item to List</Button>
    </form>
  );
}
