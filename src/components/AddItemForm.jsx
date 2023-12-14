import Button from "./Button";
import { useState } from "react";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>
        <b>Add an Item</b>
      </h2>
      <input
        type="text"
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Click Me</Button>
    </form>
  );
}
