import Button from "./Button";
import React, { useState } from "react";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const newItem = {
          id: 6,
          name: itemText,
          packed: false,
        };
        setItems((prevItems) => [...prevItems, newItem]);
      }}
    >
      <h2>Add an Item</h2>
      <input
        type="text"
        value={itemText}
        placeholder="Add Item here"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add Item to List</Button>
    </form>
  );
}
