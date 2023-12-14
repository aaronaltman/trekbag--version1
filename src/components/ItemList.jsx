export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((list) => (
        <Item key={list.id} name={list.name} />
      ))}
    </ul>
  );
}

function Item({ list }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {list.name}
      </label>
      <button className="delete-button">Delete X</button>
    </li>
  );
}
