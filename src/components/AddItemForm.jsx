import Button from "./Button";
import { useRef, useState } from "react";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, itemText];
    });
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} autoFocus={true}>
      <input
        type="text"
        value={itemText}
        onChange={(event) => setItemText(event.target.value)}
        ref={inputRef}
      />
      <Button type="submit">Add Item to List</Button>
    </form>
  );
}
