import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handletoggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            itemText={item}
            handleDeleteItem={handleDeleteItem}
            handletoggleItem={handletoggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handletoggleItem }) {
  return (
    <li className="item">
      <label>
        <input onChange={() => handletoggleItem(item.id)} type="checkbox" />
        {item}
      </label>
      <button
        onClick={() => handleDeleteItem(item.id)}
        className="delete-button"
      >
        Delete Item X
      </button>
    </li>
  );
}
