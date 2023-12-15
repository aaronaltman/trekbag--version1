export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} itemText={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item}
      </label>
      <button onClick={(e) => {}} className="delete-button">
        Delete Item X
      </button>
    </li>
  );
}
