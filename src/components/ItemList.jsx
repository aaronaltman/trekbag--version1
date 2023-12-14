export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} name={item.name} />
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
