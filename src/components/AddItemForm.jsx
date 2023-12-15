import Button from "./Button";
import { useRef, useState } from "react";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        //form validation
        if (!itemText) {
          alert("Please enter an item");
          return;
        }
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
        autofocus
      />
      <Button type="submit">Add Item to List</Button>
    </form>
  );
}
