export default function ItemList({ items }) {
  return <ul>{console.log(items)}</ul>;
}

function Item({ el }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {el.name}
      </label>
      <button className="delete-button">Delete X</button>
    </li>
  );
}
