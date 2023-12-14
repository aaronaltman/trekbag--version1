import { myItems } from "../lib/constants";
import { useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState(myItems);

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} name={item.name} description={item.description} />
      ))}
    </ul>
  );
}

function Item({ name }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {name}
      </label>
      <button className="delete-button">Delete X</button>
    </li>
  );
}
