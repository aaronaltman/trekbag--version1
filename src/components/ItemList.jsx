import EmptyView from "./EmptyView";
import Select from "react-select";

const sortingOptions = [
  {
    label: "Sort by Default",
    value: "Default",
  },
  {
    label: "Sort by Packed",
    value: "Packed",
  },
  {
    label: "Sort by Unpacked",
    value: "Unpacked",
  },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handletoggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <section className="sorting">
          <Select defaultValue={sortingOptions[0]} options={sortingOptions} />
        </section>
      ) : null}
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
