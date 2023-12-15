import Button from "./Button";
import { useState } from "react";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newItem = {
          id: Math.random(),
          name: itemText,
          packed: false,
        };
        setItems((prev) => [...prev, newItem]);
      }}
    >
      <h2>
        <b>Add an Item</b>
      </h2>
      <input
        type="text"
        value={itemText}
        onChange={(event) => {
          setItemText(event.target.value);
          console.log(itemText);
        }}
      />
      <Button type="submit">Add Item to List</Button>
    </form>
  );
}
