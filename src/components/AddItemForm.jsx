export default function AddItemForm() {
  return (
    <form>
      <h2>Add an Item</h2>
      <input type="text" placeholder="Add Item here" />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
